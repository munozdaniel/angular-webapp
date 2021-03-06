import {Component} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ProductoService} from '../services/producto.service';
import {Producto} from '../models/Producto';
@Component({
	selector: 'producto-detail',
	templateUrl: '../views/producto-detail.html',
	providers: [ProductoService]
})
export class ProductoDetailComponent{
	public producto: Producto;
	constructor(
		private _productoService: ProductoService,
		private _route: ActivatedRoute,
		private _router: Router
	){

	}

	ngOnInit(){
		console.log("Producto detalles cargado");
	}

	getProducto(){
		this._route.params.foreach((params: Params)=>{
			this._productoService.getProducto( params['id']).subscribe(
				response =>
				{
					console.log(response);
					if(response.code == 200){
						this.producto = response.data;
					}else{
						this._router.navigate(['/productos']);
					}
				},
				error =>
				{
					console.log(<any> error);
				}
			);
		});
	}
}