interface IOrder {
	id: number;
	petId: number;
	quantity: number;
	shipDate: Date;
	status: string;
	complete: boolean;
}

interface ICategory {
	id: number;
	name: string;
}

interface IUser {
	id: number;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	phone: string;
	userStatus: number;
}

interface ITag {
	id: number;
	name: string;
}

interface IPet {
	id: number;
	category: ICategory;
	name: string;
	photoUrls: string[];
	tags: ITag[];
	status: string;
}

interface IApiResponse {
	code: number;
	type: string;
	message: string;
}

