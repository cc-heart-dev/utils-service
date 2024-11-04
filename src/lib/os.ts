import { execSync } from 'node:child_process'

/**
 * Retrieves the serial number of the CPU.
 *
 * @returns {string | null} The serial number of the CPU, or null if the operating system is not supported.
 */
export function getCPUSerialNumber() {
  let cmd = ''
  switch (process.platform) {
    case 'win32': {
      cmd = 'wmic cpu get ProcessorId';
      break
    }
    case 'darwin': {
      cmd = 'system_profiler SPHardwareDataType | grep "Serial Number" | awk \'{print $NF}\'';
      break;
    }
    case 'linux': {
      cmd = 'cat /proc/cpuinfo | grep Serial | awk \'{print $NF}\'';
    }
  }

  if (!cmd)
    return null

  const data = execSync(cmd)
  return data.toString()
}