/**
 * Checks if the given path points to a file.
 *
 * @param {string} path - The path to check.
 * @return {Promise<boolean>} A promise that resolves to a boolean indicating whether the path points to a file.
 */
export declare function isFile(path: string): Promise<boolean>;
/**
 * Checks if the given path is a directory.
 *
 * @param {string} path - The path to check.
 * @return {Promise<boolean>} A promise that resolves to true if the path is a directory, false otherwise.
 */
export declare function isDirectory(path: string): Promise<boolean>;
