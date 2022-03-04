class User {

    #userName;
    #userPass;
    #userEmail;
    #name_description;
    #avatar;

    constructor(props) {
        this.#userName = props.userName;
        this.#userPass = props.userPass;
        this.#userEmail = props.userEmail;
        this.#name_description = props.name_description;
        this.#avatar = props.avatar;
    }

    constructor() {
        this.#userName = this.#generateRandomName();
        this.#userPass = this.#generateRandomPass();
        this.#userEmail = this.#generateRandomEmail();
        this.#name_description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.";
        this.#avatar = "https://www.latercera.com/resizer/ZwYtLBDucTx2GhRF45twlp7Ikxs=/375x250/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/IWE35XK3SFCNBGJYGC65NCEONA.jpg";
    }

    get userName() {
        return this.#userName;
    }

    set userName(newName) {
        this.#userName = newName;
    }

    get userPass() {
        return this.#userPass;
    }

    set userPass(newPass) {
        this.#userPass = newPass;
    }

    get userEmail() {
        return this.#userEmail;
    }

    set userEmail(newMail) {
        this.#userEmail = newMail;
    }

    get name_description() {
        return this.#name_description;
    }

    set name_description(newDescription) {
        this.#name_description = newDescription;
    }

    get avatar() {
        return this.#avatar;
    }

    set avatar(newAvatar) {
        this.#avatar = newAvatar;
    }

    #generateRandomName() {
        const arr = ["Mohamed", "Mary", "Santiago", "Sophie", "Emma", "John", "Ali", "Anna", "Lily", "William"];
        return arr[Math.round(Math.random() * arr.length())]
    }

    #generateRandomPass() {
        const arr = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 9; j++) {
                arr[i] += (Math.round(Math.random * 9))
            }
            arr[i] = toString(arr[i]);
        }
        return arr[Math.round(Math.random() * arr.length())]
    }

    #generateRandomEmail() {
        const arr = ["Mohamed", "Mary", "Santiago", "Sophie", "Emma", "John", "Ali", "Anna", "Lily", "William"];

        return arr[Math.round(Math.random() * arr.length())]
            + "_"
            + [Math.round(Math.random() * arr.length())]
            + "@gmail.com"
    }
}

