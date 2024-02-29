import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { VendaComponent } from './pages/venda/venda.component';
import { HistoricoVendaComponent } from './pages/historico-venda/historico-venda.component';
import { ReporteComponent } from './pages/reporte/reporte.component';
import { SharedModule } from 'src/app/reutilizaveis/shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent,
    UsuarioComponent,
    ProdutoComponent,
    VendaComponent,
    HistoricoVendaComponent,
    ReporteComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ]
})
export class LayoutModule { }
