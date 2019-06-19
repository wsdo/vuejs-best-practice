const log = require('git-log-parser')
const through2 = require('through2')
const pkg = require(process.cwd() + '/package.json')
const semver = require('semver')
// const execa = require('execa')
const { exec, execSync } = require('child_process')

const TYPE_REG = {
  major: /major:/i,
  minor: /minor:/i,
  patch: /patch:/i
}

const getUpdateType = commit => {
  const ret = Object.keys(TYPE_REG).find(key => {
    const reg = TYPE_REG[key]
    return reg.test(commit.subject) || reg.test(commit.body)
  })
  return ret || 'patch'
}

const getCurrentVersion = () => {
  // const ver = execSync(`npm view ${pkg.name} version`, { encoding: 'utf8' }).trim()
  const ver = execSync(`git describe --abbrev=0 --tags`, { encoding: 'utf8' }).trim()
  console.log('INFO: npm version', ver)
  console.log('INFO: pkg version', pkg.version)
  return semver.gt(ver, pkg.version) ? ver : pkg.version
}

log.parse({ _: '-1' }).pipe(
  through2.obj(function(obj, enc, callback) {
    try {
      const type = getUpdateType(obj)
      console.log('INFO: type checked: ', type)
      const version = getCurrentVersion()

      if (!version) {
        console.error('ERROR: can NOT get version')
        process.exit(-1)
      }

      console.log('INFO: version checked: ', version)
      const nextVersion = semver.inc(version, type)
      execSync(`npm version ${nextVersion} --no-git-tag-version`)
      // const publishRes = execSync(`npm publish --registry=https://registry.npmjs.org/ --userconfig=$HOME/.hnpmrc`, { encoding: 'utf8' })
      // console.log('INFO: publish success [', publishRes.trim(), ']')
      execSync(`git tag -a 'v${nextVersion}' -m 'version v${nextVersion}'`)
      execSync(`git push --tags`)
    } catch (e) {
      console.error('ERROR:', e)
      process.exit(-1)
    }
  })
)
