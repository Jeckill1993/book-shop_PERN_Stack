import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: "phones" },
            { id: 2,  name: "laptops" },
        ];
        this._brands = [
            { id: 1, name: "apple" },
            { id: 2, name: "xiaomi" },
        ];
        this._devices = [
            { id: 1, name: "iPhone 12 pro", price: 29000, rating: 5, img: ""},
            { id: 1, name: "iPhone 12 pro", price: 29000, rating: 5, img: ""},
            { id: 1, name: "iPhone 12 pro", price: 29000, rating: 5, img: ""},
            { id: 1, name: "iPhone 12 pro", price: 29000, rating: 5, img: ""},
        ]
        makeAutoObservable(this);
    }

    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
}