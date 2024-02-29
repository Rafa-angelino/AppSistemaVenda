import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { VendaComponent } from './pages/venda/venda.component';
import { HistoricoVendaComponent } from './pages/historico-venda/historico-venda.component';
import { ReporteComponent } from './pages/reporte/reporte.component';

const routes: Routes = [{
  path:'',
  component:LayoutComponent,
  children:[
    {path:'dashboard', component:DashboardComponent},
    {path:'usuarios', component:UsuarioComponent},
    {path:'produtos', component:ProdutoComponent},
    {path:'venda', component:VendaComponent},
    {path:'historico_venda', component:HistoricoVendaComponent},
    {path:'reportes', component:ReporteComponent},

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
