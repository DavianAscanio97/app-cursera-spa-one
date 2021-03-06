import {v4 as uuid} from 'uuid';

export class DestinoViaje {
    
	private selected: boolean;
	public  servicios: string[];
	id = uuid();
	constructor(public nombre: string, public imagenUrl: string, public votes: number =0) {
		this.servicios = ['Pileta', 'Desayuno','Camping','Album de fotos'];
	 }

	isSelected(): boolean {
		return this.selected;
	}

	setSelected(s: boolean) {
		this.selected = s;
	}

	voteUp() {
        this.votes++;
	}
	
	voteDown() {
        this.votes--;
    }

}
