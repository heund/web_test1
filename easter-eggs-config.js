// Easter Egg Configuration
// Define all easter egg commands and their associated animations

const EASTER_EGG_COMMANDS = {
    // Greetings - all trigger waving hand
    'hi': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'hello': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'hey': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'heyo': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'heya': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'yo': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'sup': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'wassup': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'hows it going': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'howdy': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'ahoy': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'greetings': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'hiya': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'hola': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'aloha': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'salut': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'ciao': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'bonjour': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'konnichiwa': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'annyeong': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '안녕': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '안녕하세요': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '안뇽': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '안냥': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '하이': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '헬로': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '반갑습니다': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '반가워': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '반갑다': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '잘가': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '잘있어': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '수고': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    '수고해': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    'wave': {
        type: 'animation',
        handler: 'showWavingHand',
        description: 'Wave hello'
    },
    
    // Swear words - trigger frowning emoji
    'fuck': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    'shit': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    'damn': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    'hell': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    'ass': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    'bastard': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    'crap': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    'fucking': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    'fucking hell': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    'far out': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    '씨발': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    '시발': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    '젠장': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    '슈발': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    '히밤': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    '쓰벌': {
        type: 'animation',
        handler: 'showSwearReaction',
        description: 'Disapprove'
    },
    
    // Meow - trigger cat emoji
    'meow': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    'mew': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    'meowmeow': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    'kitty': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    'cat': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    '야옹': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    '야용': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    '미야옹': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    '미야용': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    '냥': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    '냥냥': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    '고양이': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    '냐용': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    '냐옹': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    '냐': {
        type: 'animation',
        handler: 'showCat',
        description: 'Cat'
    },
    
    // Love expressions - all trigger heart
    'love': {
        type: 'animation',
        handler: 'showHeart',
        description: 'Love'
    },
    'ily': {
        type: 'animation',
        handler: 'showHeart',
        description: 'I love you'
    },
    'i love you': {
        type: 'animation',
        handler: 'showHeart',
        description: 'I love you'
    },
    'love you': {
        type: 'animation',
        handler: 'showHeart',
        description: 'Love you'
    },
    'luv': {
        type: 'animation',
        handler: 'showHeart',
        description: 'Love'
    },
    'luv u': {
        type: 'animation',
        handler: 'showHeart',
        description: 'Love you'
    },
    'love u': {
        type: 'animation',
        handler: 'showHeart',
        description: 'Love you'
    },
    '사랑해': {
        type: 'animation',
        handler: 'showHeart',
        description: 'I love you (Korean)'
    },
    'tkfkdgo': {
        type: 'animation',
        handler: 'showHeart',
        description: 'I love you (Korean)'
    },
    '사랑해요': {
        type: 'animation',
        handler: 'showHeart',
        description: 'I love you (Korean polite)'
    },
    '사랑합니다': {
        type: 'animation',
        handler: 'showHeart',
        description: 'I love you (Korean formal)'
    },
    '사랑': {
        type: 'animation',
        handler: 'showHeart',
        description: 'Love (Korean)'
    },
    '사랑한다': {
        type: 'animation',
        handler: 'showHeart',
        description: 'I love you (Korean)'
    },
    '사랑해용': {
        type: 'animation',
        handler: 'showHeart',
        description: 'I love you (Korean cute)'
    },
    '사랑해여': {
        type: 'animation',
        handler: 'showHeart',
        description: 'I love you (Korean cute)'
    },
    '사랑행': {
        type: 'animation',
        handler: 'showHeart',
        description: 'I love you (Korean cute)'
    },
    '사랑혀': {
        type: 'animation',
        handler: 'showHeart',
        description: 'I love you (Korean cute)'
    },
    
    // Cool/Awesome expressions - all trigger funny face
    'cool': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Cool'
    },
    'sick': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Sick'
    },
    'siiick': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Sick'
    },
    'sic': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Sick'
    },
    'awesome': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Awesome'
    },
    'wow': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Wow'
    },
    'kickass': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Kickass'
    },
    'jesus': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Jesus'
    },
    'you\'re so cool': {
        type: 'animation',
        handler: 'showFunny',
        description: 'You\'re so cool'
    },
    'this is so cool': {
        type: 'animation',
        handler: 'showFunny',
        description: 'This is so cool'
    },
    'this is so sick': {
        type: 'animation',
        handler: 'showFunny',
        description: 'This is so sick'
    },
    'this is fucking sick': {
        type: 'animation',
        handler: 'showFunny',
        description: 'This is fucking sick'
    },
    'awesomeness': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Awesomeness'
    },
    'coolio': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Coolio'
    },
    'rad': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Rad'
    },
    '짱': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Amazing (Korean)'
    },
    '짱이다': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Amazing (Korean)'
    },
    '짱이네': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Amazing (Korean)'
    },
    '쩐다': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Awesome (Korean)'
    },
    '쩔어': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Awesome (Korean)'
    },
    '힙하다': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Hip (Korean)'
    },
    '힙해': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Hip (Korean)'
    },
    '오': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Oh (Korean)'
    },
    '우와': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Wow (Korean)'
    },
    '헐': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Wow (Korean)'
    },
    '미쳤네': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Crazy (Korean)'
    },
    '대박': {
        type: 'animation',
        handler: 'showFunny',
        description: 'Awesome (Korean)'
    },
    
    // Fire expressions - all trigger fire
    'fire': {
        type: 'animation',
        handler: 'showFire',
        description: 'Fire'
    },
    'fiiire': {
        type: 'animation',
        handler: 'showFire',
        description: 'Fire'
    },
    'fiire': {
        type: 'animation',
        handler: 'showFire',
        description: 'Fire'
    },
    'this is fire': {
        type: 'animation',
        handler: 'showFire',
        description: 'This is fire'
    },
    'lit': {
        type: 'animation',
        handler: 'showFire',
        description: 'Lit'
    },
    '돌았다': {
        type: 'animation',
        handler: 'showFire',
        description: 'Crazy (Korean)'
    },
    '찢었다': {
        type: 'animation',
        handler: 'showFire',
        description: 'Killed it (Korean)'
    },
    '찢음': {
        type: 'animation',
        handler: 'showFire',
        description: 'Killed it (Korean)'
    },
    '도름': {
        type: 'animation',
        handler: 'showFire',
        description: 'Crazy (Korean slang)'
    },
    '도랏': {
        type: 'animation',
        handler: 'showFire',
        description: 'Crazy (Korean slang)'
    },
    '천재': {
        type: 'animation',
        handler: 'showFire',
        description: 'Genius (Korean)'
    },
    '천재다': {
        type: 'animation',
        handler: 'showFire',
        description: 'Genius (Korean)'
    },
    '등': {
        type: 'animation',
        handler: 'showFire',
        description: 'Etc (Korean)'
    },
    
    // Developer code snippets with terminal overlay
    'console.log': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Classic debugging',
        data: {
            command: 'console.log("Hello, World!")',
            type: 'success',
            message: 'Still logging after all these years.'
        }
    },
    'console.log()': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Classic debugging',
        data: {
            command: 'console.log()',
            type: 'success',
            message: 'undefined, like my weekend plans.'
        }
    },
    'print()': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Python debugging',
        data: {
            command: 'print("Hello, World!")',
            type: 'success',
            message: 'Hello, World!'
        }
    },
    'git push': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Ship it',
        data: {
            command: 'git push origin main',
            type: 'success',
            message: 'Everything up-to-date. You did nothing, but nicely.'
        }
    },
    'git push --force': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Dangerous move',
        data: {
            command: 'git push --force',
            type: 'error',
            message: 'Bold move. History just cried a little.'
        }
    },
    'rm -rf': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Very dangerous',
        data: {
            command: 'rm -rf *',
            type: 'error',
            message: 'Denied. We like our reality intact, thanks.'
        }
    },
    'sudo rm -rf /': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Extremely dangerous',
        data: {
            command: 'sudo rm -rf /',
            type: 'error',
            message: 'Even I have boundaries.'
        }
    },
    ':(){ :|:& };:': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Fork bomb',
        data: {
            command: ':(){ :|:& };:',
            type: 'error',
            message: 'Nice try, chaos enthusiast.'
        }
    },
    'while true': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Infinite loop',
        data: {
            command: 'while true; do echo "forever"; done',
            type: 'error',
            message: 'Process stopped. Forever was shorter than expected.'
        }
    },
    'while(true)': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Infinite loop',
        data: {
            command: 'while(true) { console.log("forever"); }',
            type: 'error',
            message: 'Loop terminated. Patience exceeded runtime.'
        }
    },
    'npm install': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Node modules',
        data: {
            command: 'npm install',
            type: 'install',
            asciiArt: true,
            message: ''
        }
    },
    'pip install': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Python packages',
        data: {
            command: 'pip install rickroll',
            type: 'install',
            asciiArt: true,
            message: 'Successfully installed rickroll 1.0.0. Predictable'
        }
    },
    'import this': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Zen of Python',
        data: {
            command: 'import this',
            type: 'success',
            message: 'already imported myself by accident'
        }
    },
    'hello world': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'First program',
        data: {
            command: 'echo "Hello, World!"',
            type: 'success',
            message: 'Hello, you!'
        }
    },
    
    // Git commands
    'git status': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Git status',
        data: {
            command: 'git status',
            type: 'success',
            messages: [
                'current state: still recovering from the last exhibition',
                'nothing to commit, working tree clean'
            ]
        }
    },
    'git blame': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Git blame',
        data: {
            command: 'git blame',
            type: 'success',
            message: 'probably me. it usually is'
        }
    },
    'git log': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Git log',
        data: {
            command: 'git log',
            type: 'success',
            message: 'full of late-night commits and emotional debugging'
        }
    },
    'git diff': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Git diff',
        data: {
            command: 'git diff',
            type: 'success',
            message: 'this version feels slightly more honest'
        }
    },
    'git stash': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Git stash',
        data: {
            command: 'git stash',
            type: 'success',
            message: 'parking an idea for next exhibition'
        }
    },
    'git reset --hard': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Git reset hard',
        data: {
            command: 'git reset --hard',
            type: 'error',
            message: 'that was a bit too much'
        }
    },
    
    // Directory commands
    'cd': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Change directory',
        data: {
            command: 'cd',
            type: 'success',
            message: 'where to, exactly? typical'
        }
    },
    'pwd': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Print working directory',
        data: {
            command: 'pwd',
            type: 'success',
            message: 'nothing is ever absolute imho'
        }
    },
    'ls': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'List files',
        data: {
            command: 'ls',
            type: 'success',
            message: 'coffee. some new thing I\'m working on, coffee, coffee..'
        }
    },
    'ls -a': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'List all files',
        data: {
            command: 'ls -a',
            type: 'success',
            message: 'there, the hidden folders. the ones with feelings'
        }
    },
    'cat test.js': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Cat test file',
        data: {
            command: 'cat test.js',
            type: 'success',
            message: 'that\'s the file that kept crashing during BOSS tests'
        }
    },
    'touch readme.md': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Touch readme',
        data: {
            command: 'touch readme.md',
            type: 'success',
            message: 'still haven\'t written the proper artist statement'
        }
    },
    'grep string *': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Grep string',
        data: {
            command: 'grep string *',
            type: 'success',
            message: 'I already tried that during Resonance Loop'
        }
    },
    'whoami': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Who am I',
        data: {
            command: 'whoami',
            type: 'success',
            message: 'Bekkie with a K :)'
        }
    },
    'sudo su': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Sudo su',
        data: {
            command: 'sudo su',
            type: 'success',
            message: 'maybe collective power, thanks'
        }
    },
    'man life': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Man life',
        data: {
            command: 'man life',
            type: 'error',
            message: 'no manual. I wrote a framework instead'
        }
    },
    'exit': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Exit',
        data: {
            command: 'exit',
            type: 'success',
            message: 'not first'
        }
    },
    
    // Development commands
    'npm run dev': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'NPM run dev',
        data: {
            command: 'npm run dev',
            type: 'success',
            message: 'always in development, even offline'
        }
    },
    'npm audit': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'NPM audit',
        data: {
            command: 'npm audit',
            type: 'error',
            message: 'vulnerabilities: many, but mostly aesthetic'
        }
    },
    'systemctl stop.py': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Systemctl stop',
        data: {
            command: 'systemctl stop.py',
            type: 'error',
            message: 'can\'t stop what isn\'t a proper System'
        }
    },
    'node server': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Node server',
        data: {
            command: 'node server',
            type: 'success',
            message: 'backend humming like a mild anxiety'
        }
    },
    'bundle install': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Bundle install',
        data: {
            command: 'bundle install',
            type: 'success',
            message: 'dependencies: caffeine, coherence, curiosity'
        }
    },
    'make art': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Make art',
        data: {
            command: 'make art',
            type: 'success',
            message: 'running... success uncertain'
        }
    },
    'rm -rf imposter_syndrome': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Remove imposter syndrome',
        data: {
            command: 'rm -rf imposter_syndrome',
            type: 'error',
            message: 'denied. I still need the reference material'
        }
    },
    'chmod 777 dreams': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Chmod dreams',
        data: {
            command: 'chmod 777 dreams',
            type: 'success',
            message: 'full access granted, dangerous choice'
        }
    },
    'ping deadline': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Ping deadline',
        data: {
            command: 'ping deadline',
            type: 'success',
            message: 'latency high during deadlines'
        }
    },
    'env': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Environment variables',
        data: {
            command: 'env',
            type: 'success',
            message: 'current variables: coffee = 3, hope = ?'
        }
    },
    'brew install calm': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Brew install calm',
        data: {
            command: 'brew install calm',
            type: 'error',
            message: 'package unavailable during exhibitions'
        }
    },
    'sleep 1h': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Sleep',
        data: {
            command: 'sleep 1h',
            type: 'error',
            message: 'command ignored, I need to hear what a used battery sounds like if it had consciousness'
        }
    },
    'df -h': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Disk free',
        data: {
            command: 'df -h',
            type: 'success',
            message: 'storage low, heart full'
        }
    },
    'date': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Date',
        data: {
            command: 'date',
            type: 'success',
            message: 'today again, somehow'
        }
    },
    'npm publish': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'NPM publish',
        data: {
            command: 'npm publish',
            type: 'success',
            message: 'oh god people can see this now'
        }
    },
    'code .': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Open code',
        data: {
            command: 'code .',
            type: 'success',
            message: 'opening everything at once like always'
        }
    },
    'node index.js': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Node index',
        data: {
            command: 'node index.js',
            type: 'success',
            message: 'this one signifies my face. it\'s weird, I know'
        }
    },
    'python -m this': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Python this',
        data: {
            command: 'python -m this',
            type: 'success',
            message: 'imported self-reflection successfully'
        }
    },
    'git commit -m "main"': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Git commit main',
        data: {
            command: 'git commit -m "main"',
            type: 'success',
            message: 'trying to merge artist and engineer branches'
        }
    },
    'echo "hi"': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Echo hi',
        data: {
            command: 'echo "hi"',
            type: 'success',
            message: 'hi. it\'s really just me at the AI'
        }
    },
    'cat heart.txt': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Cat heart',
        data: {
            command: 'cat heart.txt',
            type: 'success',
            message: 'corrupted during calibration'
        }
    },
    'grep love *': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Grep love',
        data: {
            command: 'grep love *',
            type: 'success',
            message: 'no results in this directory. try elsewhere'
        }
    },
    'npm run panic': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'NPM run panic',
        data: {
            command: 'npm run panic',
            type: 'error',
            message: 'WHY ARE YOU DOING THIS'
        }
    },
    'clear': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Clear',
        data: {
            command: 'clear',
            type: 'success',
            message: 'pretending to start fresh again'
        }
    },
    'sudo reboot': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Sudo reboot',
        data: {
            command: 'sudo reboot',
            type: 'success',
            message: 'not now, I just reached flow'
        }
    },
    'git checkout art': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Git checkout art',
        data: {
            command: 'git checkout art',
            type: 'success',
            message: 'switching branches, I burnt out'
        }
    },
    'ping purpose': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Ping purpose',
        data: {
            command: 'ping purpose',
            type: 'success',
            message: 'intermittent connection, signal improving'
        }
    },
    'curl meaning': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Curl meaning',
        data: {
            command: 'curl meaning',
            type: 'success',
            message: '404 not found'
        }
    },
    'history': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'History',
        data: {
            command: 'history',
            type: 'success',
            message: 'building this site, wondering if anyone would ever find this easter egg. existential crisis, continue building because it\'s still kinda funny'
        }
    },
    'ls -hope': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'List hope',
        data: {
            command: 'ls -hope',
            type: 'success',
            message: 'fragile but present'
        }
    },
    'npm start': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'NPM start',
        data: {
            command: 'npm start',
            type: 'success',
            message: 'running BOSS engine... hold your breath'
        }
    },
    'curl localhost.net': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Curl localhost',
        data: {
            command: 'curl localhost.net',
            type: 'success',
            message: 'that email still works, by the way'
        }
    },
    'git clone https://github.com/reality': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Git clone reality',
        data: {
            command: 'git clone https://github.com/reality',
            type: 'error',
            message: 'cloning into speculation'
        }
    },
    'top -you': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Top you',
        data: {
            command: 'top -you',
            type: 'success',
            message: 'multitasking life and theory'
        }
    },
    'kill self': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Kill self',
        data: {
            command: 'kill self',
            type: 'error',
            message: 'denied. I\'m still needed for the install'
        }
    },
    'cat longing.txt': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Cat longing',
        data: {
            command: 'cat longing.txt',
            type: 'success',
            message: 'that\'s the file from Ulsan I never closed'
        }
    },
    'grep peace *': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Grep peace',
        data: {
            command: 'grep peace *',
            type: 'success',
            message: 'maybe in next year\'s dataset'
        }
    },
    'tail -f /var/log': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Tail log',
        data: {
            command: 'tail -f /var/log',
            type: 'success',
            message: 'currently looping on coherence again'
        }
    },
    'sudo apt-get love': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Apt get love',
        data: {
            command: 'sudo apt-get love',
            type: 'error',
            message: 'unmet dependencies, still compiling'
        }
    },
    'rm -rf past': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Remove past',
        data: {
            command: 'rm -rf past',
            type: 'error',
            message: 'permission denied. I archive everything'
        }
    },
    'cat /dev/null': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Cat dev null',
        data: {
            command: 'cat /dev/null',
            type: 'success',
            message: 'sometimes nothing is exactly the point'
        }
    },
    'exit': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Exit',
        data: {
            command: 'exit',
            type: 'success',
            message: 'you\'ll check again later, I know'
        }
    },
    'ping inspiration': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Ping inspiration',
        data: {
            command: 'ping inspiration',
            type: 'success',
            message: 'latency improving since I rested'
        }
    },
    'touch feelings.txt': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Touch feelings',
        data: {
            command: 'touch feelings.txt',
            type: 'success',
            message: 'finally created'
        }
    },
    'mv /dreams /archive': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Move dreams',
        data: {
            command: 'mv /dreams /archive',
            type: 'success',
            message: 'temporary, I promise'
        }
    },
    'cat /feelings/json': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Cat feelings json',
        data: {
            command: 'cat /feelings/json',
            type: 'success',
            message: 'malformed syntax, authentic though'
        }
    },
    'npm run overthink': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'NPM run overthink',
        data: {
            command: 'npm run overthink',
            type: 'success',
            message: 'automatic process since birth'
        }
    },
    'man -vibe': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Man vibe',
        data: {
            command: 'man -vibe',
            type: 'success',
            message: 'written in lowercase for humility'
        }
    },
    'curl https://future': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Curl future',
        data: {
            command: 'curl https://future',
            type: 'error',
            message: 'connection open, response undefined'
        }
    },
    'git add work': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Git add work',
        data: {
            command: 'git add work',
            type: 'success',
            message: 'that\'s literally my whole practice'
        }
    },
    'ps aux': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Process status',
        data: {
            command: 'ps aux',
            type: 'success',
            message: 'new ideas still compiling, can\'t be killed'
        }
    },
    'echo "bye"': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Echo bye',
        data: {
            command: 'echo "bye"',
            type: 'success',
            message: 'see you at the next system build'
        }
    },
    'kill -9 burnout': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Kill burnout',
        data: {
            command: 'kill -9 burnout',
            type: 'error',
            message: 'process still running'
        }
    },
    'df --art': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Disk free art',
        data: {
            command: 'df --art',
            type: 'success',
            message: 'exhibiting again soon, probably already building for the one after it'
        }
    },
    'ping field': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Ping field',
        data: {
            command: 'ping field',
            type: 'success',
            message: 'resonance detected'
        }
    },
    'cat coherence.txt': {
        type: 'animation',
        handler: 'showTerminalOverlay',
        description: 'Cat coherence',
        data: {
            command: 'cat coherence.txt',
            type: 'success',
            message: 'line 1: hold complexity'
        }
    },
    
    // Add more easter eggs here
    // 'dance': {
    //     type: 'animation',
    //     handler: 'showDanceAnimation',
    //     description: 'Make something dance'
    // },
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EASTER_EGG_COMMANDS;
}
