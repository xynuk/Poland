function generatePassword(length) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    return password;
}

function askToClose() {
    print("Do you want to close this? [y/n]: ");
    let response = input().trim().toLowerCase(); // Capture user input and trim whitespace
    if (response === "y") {
        print("Goodbye!");
        exit(); // Exit the script
    } else if (response === "n") {
        print("Continuing program...");
        main(); // Restart the main function
    } else {
        print("Invalid input. Please enter 'y' or 'n'.");
        askToClose(); // Re-ask the confirmation
    }
}

function main() {
    let length = 12; // You can make this user-configurable
    let password = generatePassword(length);
    print("Generated Password: " + password);
    askToClose(); // Ask if the user wants to close the program
}

main();
