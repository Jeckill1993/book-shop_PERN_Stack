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
            { id: 2, name: "iPhone XS", price: 22000, rating: 5, img: ""},
            { id: 3, name: "Xiaomi Note7", price: 4000, rating: 5, img: ""},
            { id: 4, name: "Macbook Air M1", price: 34000, rating: 5, img: ""},
        ];
        this._selectedType = {};
        this._selectedBrand = {};
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
    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand;
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
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}