
export interface IDataServices {
	savePriceHome(price: number): void,
	saveFavoriteHome(selected: boolean): void,
	getPriceHome(): number,
	getFavoriteHome(): boolean
}

export default class DataServices implements IDataServices {
	private static instance: DataServices;
	constructor() {
	}
	static getInstance(): DataServices {
		if (!this.instance) {
			this.instance = new DataServices();
		}
		return this.instance;
	}

	savePriceHome(price: number): void {
		window.sessionStorage.setItem("price", price.toString());
	}

	saveFavoriteHome(selected: boolean): void {
		window.sessionStorage.setItem("favorite", selected.toString());
	}

	getPriceHome(): number {
		let price = window.sessionStorage.getItem("price");
		return parseFloat(price);
	}

	getFavoriteHome(): boolean {
		let fav = window.sessionStorage.getItem("favorite") || "";
		return fav.toLowerCase() == 'true' ? true : false;
	}
}