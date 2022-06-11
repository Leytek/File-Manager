console.log(`Welcome to the File Manager, ${(s = process.argv.slice(2).join``.match(/\s*--[^-]+=(.+)/)) ? s[1] : 'incognito'}!`);
