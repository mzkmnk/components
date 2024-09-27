import { Observable } from "rxjs";

export type TMessageItems = {
	isEnd:boolean;
	messageStart: {
		text: string;
		icon: string;
	};
	messageEnd: {
		text: string;
		icon: string;
	};
};