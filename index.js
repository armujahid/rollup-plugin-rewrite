const MagicString = require('magic-string');

module.exports = function rewrite({find, replace}) {

  return {
    name: 'rewrite',
    renderChunk(code) {
      const magicString = new MagicString(code);
      let hasReplacements = false;
      let match;
      while ((match = find.exec(code))) {
        hasReplacements = true;
        const start = match.index;
        const end = start + match[0].length;
        const replacement = replace(match);
        magicString.overwrite(start, end, replacement);
      }

      if (!hasReplacements) return null;
      const map = magicString.generateMap({
        includeContent: true,
        hires: true
      });
      return { code: magicString.toString(), map };
    },
  };
};
