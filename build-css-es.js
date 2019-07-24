/**
 * what this file does is to get css file as input, and change the breakpoint
 * and re-write this for each required sizes (40em, 60em, 80em, etc...)
 * then the user has to import
 *  'react-super-res.../.../SuperResponsiveTableStyle_<size>.css'
 * like
 *   'react-super-res.../.../SuperResponsiveTableStyle_<60>.css'
 */

const FILE_NAME = 'SuperResponsiveTableStyle';

const nodeFileSystem = require('fs');

const file = nodeFileSystem.readFileSync(`./src/${FILE_NAME}.css`).toString();
const lines = file.split('\n');

const indexOfLineWhereBreakpointIsThere =
    lines  // ugly, but works
        .findIndex(line => line.indexOf('40em') > -1);

[60, 80].forEach(size => {
    const sizeLineReplaced =
        lines[indexOfLineWhereBreakpointIsThere]
            .replace('40em', size + 'em');
    const newFileLines = lines.slice(0); // copy original lines
    newFileLines[indexOfLineWhereBreakpointIsThere] = sizeLineReplaced;
    
    nodeFileSystem.appendFile('./dist/' + FILE_NAME + '_' + size + '.css', newFileLines.join('\n'), err => {
        if (err) throw err;
    });
});