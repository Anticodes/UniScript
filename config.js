var typeScriptVersion = '4.0.3';
var p5Version = '1.5.0';

System.config({
  transpiler: 'ts',
  typescriptOptions: {
  },
  packages: {
    ".": {
      main: './Core/main.ts',
      defaultExtension: 'ts'
    }
  },
  meta: {
    'typescript': { 'exports': 'ts' }
  },
  paths: {
    'npm:': 'https://unpkg.com/'
  },
  map: {
    'ts': 'npm:plugin-typescript@8.0.0/lib/plugin.js',
    'typescript': 'npm:typescript@' + typeScriptVersion + '/lib/typescript.js',
    'p5': 'npm:p5@' + p5Version + '/lib/p5.min.js'
  }
});

System.import('./Core/main')
  .catch(console.error.bind(console));
