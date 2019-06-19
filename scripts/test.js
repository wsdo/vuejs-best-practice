const semver = require('semver')
// const execa = require('execa')
const { exec, execSync } = require('child_process')
const getCurrentVersion = () => {
  // const ver = execSync(`npm view ${pkg.name} version`, { encoding: 'utf8' }).trim()
  const ver = execSync(`git describe --abbrev=0 --tags`, { encoding: 'utf8' }).trim()
  console.log('INFO: npm version', ver)
  console.log('INFO: pkg version', pkg.version)
  return semver.gt(ver, pkg.version) ? ver : pkg.version
}
getCurrentVersion()
