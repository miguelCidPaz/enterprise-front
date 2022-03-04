class Company {
    #name_description
    #sector
    #creation_date
    #logo
    #webpage
    #phone_number
    #social_media
    #company_description
    #company_value
    #num_employees
    #images

    constructor(props) {
        this.#name_description = props.name_description;
        this.#sector = props.sector;
        this.#creation_date = props.creation_date;
        this.#logo = props.logo;
        this.#webpage = props.webpage;
        this.#phone_number = props.phone_number;
        this.#social_media = props.social_media;
        this.#company_description = props.company_description;
        this.#company_value = props.company_description;
        this.#num_employees = props.num_employees;
        this.#images = props.images;
    }

    constructor() {
        this.#name_description = this.#generateRandomNameDescription();
        this.#sector = this.#generateRandomSector();
        this.#creation_date = this.#generateRandomCreationDate();
        this.#logo = "https://www.weeky.es/wp-content/uploads/2016/08/circo-quiros-entrada.jpg";
        this.#webpage = "https://www.google.es/";
        this.#phone_number = this.#generateRandomPhoneNum();
        this.#social_media = "https://twitter.com";
        this.#company_description = this.#generateRandomCompanyDescription();
        this.#company_value = this.#generateRandomCompanyValue();
        this.#num_employees = Math.round(Math.random() * 100);
        this.#images = this.#generateRandomImages();
    }

    get name_description() {
        return this.#name_description;
    }

    set name_description(newName) {
        this.#name_description = newName;
    }

    get sector() {
        return this.#sector;
    }

    set sector(newSector) {
        this.#sector = newSector;
    }

    get creation_date() {
        return this.#creation_date;
    }

    set creation_date(newDate) {
        this.#creation_date = newDate;
    }

    get logo() {
        return this.#logo;
    }

    set logo(newLogo) {
        this.#logo = newLogo;
    }

    get webpage() {
        return this.#webpage;
    }

    set webpage(newWeb) {
        this.#webpage = newWeb;
    }

    get phone_number() {
        return this.#phone_number;
    }

    set phone_number(newPhone) {
        this.#phone_number = newPhone;
    }

    get social_media() {
        return this.#social_media;
    }

    set social_media(newSocial) {
        this.#social_media = newSocial;
    }

    get company_description() {
        return this.#company_description;
    }

    set company_description(newDescription) {
        this.#company_description = newDescription;
    }

    get company_value() {
        return this.#company_value;
    }

    set company_value(newValue) {
        this.#company_value = newValue;
    }

    get num_employees() {
        return this.#num_employees;
    }

    set num_employees(newEmployees) {
        this.#num_employees = newEmployees;
    }

    get images() {
        return this.#images;
    }

    set images(newImage) {
        this.#images = newImage;
    }

    #generateRandomNameDescription() {
        const arr = [];
        for (let i = 0; i < 10; i++) {
            const name = "Empresa" + (Math.round(Math.random() * 100));
            arr.push(name);
        }

        return arr[Math.round(Math.random() * arr.length)]
    }

    #generateRandomSector() {
        const arr = [];
        for (let i = 0; i < 5; i++) {
            const name = "Sector" + i + 1;
            arr.push(name);
        }

        return arr[Math.round(Math.random() * arr.length)]
    }

    #generateRandomCreationDate() {
        return Math.round(Math.random() * 30)
            + "/"
            + Math.round(Math.random() * 12)
            + "/"
            + Math.round(Math.random() * (2022 - 2012)) + 2012;
    }

    #generateRandomPhoneNum() {
        return Math.round(Math.random() * 9999)
            + "-"
            + Math.round(Math.random() * 9999)
            + "-"
            + Math.round(Math.random() * 9999)
    }

    #generateRandomCompanyDescription() {
        return this.#generateRandomNameDescription()
            + "-" + this.#generateRandomNameDescription();
    }

    #generateRandomCompanyValue() {
        return Math.round(Math.random() * 100) + " millones";
    }

    #generateRandomImages() {
        const memes = [
            "https://www.trecebits.com/wp-content/uploads/2020/12/memes-joker-444x445.jpeg",
            "https://www.trecebits.com/wp-content/uploads/2020/04/bailarines-ataud-ghana-768x427.jpg",
            "https://www.trecebits.com/wp-content/uploads/2020/12/meme-naruto-1.jpg",
            "https://www.trecebits.com/wp-content/uploads/2020/12/gato-445x445.jpg",
            "https://www.trecebits.com/wp-content/uploads/2020/12/meme-2020-estudio.jpg",
            "https://www.trecebits.com/wp-content/uploads/2020/12/confinamiento-1.jpg",
            "https://www.trecebits.com/wp-content/uploads/2020/12/papel-higienico-650x445.jpg",
            "https://www.trecebits.com/wp-content/uploads/2020/12/meme-gafas-445x445.jpeg"
        ]

        return [
            memes[Math.round(Math.random() * memes.length)],
            memes[Math.round(Math.random() * memes.length)]
        ]
    }
}