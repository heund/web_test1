// Easter Egg Handler
// Main execution logic for easter eggs

class EasterEggHandler {
    constructor() {
        this.commands = EASTER_EGG_COMMANDS;
    }
    
    // Check if a command is an easter egg
    isEasterEgg(command) {
        return this.commands.hasOwnProperty(command);
    }
    
    // Execute an easter egg command
    execute(command) {
        if (!this.isEasterEgg(command)) {
            return false;
        }
        
        const eggConfig = this.commands[command];
        
        // Execute based on type
        switch(eggConfig.type) {
            case 'animation':
                // Call the animation handler
                if (EasterEggAnimations[eggConfig.handler]) {
                    // Pass config data if it exists
                    if (eggConfig.data) {
                        EasterEggAnimations[eggConfig.handler](eggConfig.data);
                    } else {
                        EasterEggAnimations[eggConfig.handler]();
                    }
                    return true;
                }
                break;
                
            case 'behavior':
                // For future behavior-based easter eggs
                if (EasterEggAnimations[eggConfig.handler]) {
                    if (eggConfig.data) {
                        EasterEggAnimations[eggConfig.handler](eggConfig.data);
                    } else {
                        EasterEggAnimations[eggConfig.handler]();
                    }
                    return true;
                }
                break;
                
            default:
                console.warn(`Unknown easter egg type: ${eggConfig.type}`);
                return false;
        }
        
        return false;
    }
    
    // Get list of all easter egg commands (for debugging)
    listCommands() {
        return Object.keys(this.commands);
    }
}

// Make globally accessible
window.EasterEggHandler = EasterEggHandler;
window.easterEggHandler = new EasterEggHandler();
