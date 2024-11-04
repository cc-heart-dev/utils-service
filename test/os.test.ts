import { describe, vitest, afterEach, vi, test, expect } from 'vitest';
import { getCPUSerialNumber } from '../src/lib/os';

vi.mock('child_process', () => {
  return {
    execSync: vi.fn(() =>'serialNumber'),
  }
})

describe('getCPUSerialNumber', () => {
  afterEach(() => {
    vitest.restoreAllMocks();
  });

  test('should return the CPU serial number on Windows', () => {
    // Mock the process.platform to be 'win32'
    Object.defineProperty(process, 'platform', { value: 'win32' });

    const serialNumber = getCPUSerialNumber();

    expect(serialNumber).toEqual('serialNumber');
  });

  test('should return the CPU serial number on Darwin', () => {
    Object.defineProperty(process, 'platform', { value: 'darwin' });

    const serialNumber = getCPUSerialNumber();

    expect(serialNumber).toEqual('serialNumber');
  });

  test('should return the CPU serial number on Linux', () => {
    Object.defineProperty(process, 'platform', { value: 'linux' });

    const serialNumber = getCPUSerialNumber();

    expect(serialNumber).toEqual('serialNumber');
  });

  test('should return null when the platform is not supported', () => {
    Object.defineProperty(process, 'platform', { value: 'unsupported' });

    const serialNumber = getCPUSerialNumber();

    expect(serialNumber).toBeNull();
  });
});
