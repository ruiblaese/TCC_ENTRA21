var appTextilsoft = angular.module("appTextilsoft", ['ngRoute']);

appTextilsoft.config(function($routeProvider, $locationProvider){
    
	$routeProvider
    .when("/fornecedores-cad",{templateUrl:'view/fornecedor-cad.html', controller:'fornecedorController'})
    .when("/fornecedores-lista",{templateUrl:'view/fornecedor.html', controller:'fornecedorController'})
    .when("/fornecedores-editar/:id",{templateUrl:'view/fornecedor-edit.html', controller:'fornecedorDetalheController'})
    .when("/fornecedores/:id",{templateUrl:'view/fornecedor-detalhe.html', controller:'fornecedorDetalheController'})
    
    .when("/clientes-cad",{templateUrl:'view/cliente-cad.html', controller:'clienteController'})
    .when("/clientes-lista",{templateUrl:'view/cliente.html', controller:'clienteController'})
    .when("/clientes-editar/:id",{templateUrl:'view/cliente-edit.html', controller:'clienteDetalheController'})
    .when("/clientes/:id",{templateUrl:'view/cliente-detalhe.html', controller:'clienteDetalheController'})
    
    .when("/estoque-cad",{templateUrl:'view/estoque-cad.html', controller:'estoqueController'})
    .when("/estoque-lista",{templateUrl:'view/estoque.html', controller:'estoqueController'})
    .when("/estoque-editar/:id",{templateUrl:'view/estoque-edit.html', controller:'estoqueDetalheController'})
    .when("/estoque/:id",{templateUrl:'view/estoque-detalhe.html', controller:'estoqueDetalheController'})

    .when("/conta-pagar-cad",{templateUrl:'view/conta-pagar-cad.html', controller:'contaPagarController'})
    .when("/conta-pagar-lista",{templateUrl:'view/conta-pagar.html', controller:'contaPagarController'})
    .when("/conta-pagar-editar/:id",{templateUrl:'view/conta-pagar-edit.html', controller:'contaPagarDetalheController'})
    .when("/conta-pagar/:id",{templateUrl:'view/conta-pagar-detalhe.html', controller:'contaPagarDetalheController'})

    .when("/produto-list",{templateUrl:'view/produto.html', controller:'produtoController'})
    .when("/produto-cad", {templateUrl:'view/produto-cad.html',controller:'produtoController'})
    .when("/produto-edit/:id",{templateUrl:'view/produto-edit.html',controller:'produtoDetalheController'})
    .when("/produto/:id",{templateUrl:'view/produto-detalhe.html',controller:'produtoDetalheController'})
    
    .when("/produtoFornecedor-cad",{templateUrl:'view/produtoFornecedor-cad.html', controller:'produtoFornecedorController'})
    .when("/servicoFornecedor-cad",{templateUrl:'view/servicoFornecedor-cad.html', controller:'servicoFornecedorController'})

    .when("/ordem-servico-cad",{templateUrl:'view/ordem-servico-cad.html', controller:'ordemServicoController'})
    .when("/ordem-servico-lista",{templateUrl:'view/ordem-servico.html', controller:'ordemServicoController'})
    .when("/ordem-servico-editar/:id",{templateUrl:'view/ordem-servico-edit.html', controller:'ordemServicoDetalheController'})
    .when("/ordem-servico/:id",{templateUrl:'view/ordem-servico-detalhe.html', controller:'ordemServicoDetalheController'})
    
        .when("/cor-cad",{templateUrl:'view/cor-cad.html',controller:'corController'})
    .when("/cor-list",{templateUrl:'view/cor.html',controller:'corController'})
    .when("/cor/:id",{templateUrl:'view/cor-detalhe.html',controller:'corDetalheController'})
    .when("/cor-edit/:id",{templateUrl:'view/cor-edit.html',controller:'corDetalheController'})
    
     .when("/material-list",{templateUrl:'view/material.html',controller:'materialController'})
     .when("/material/:id",{templateUrl:'view/material-detalhe.html',controller:'materialDetalheController'})
     .when("/material-cad",{templateUrl:'view/material-cad.html',controller:'materialController'})
     .when("/material-edit/:id",{templateUrl:'view/material-edit.html',controller:'materialDetalheController'})
      
     .when("/estampa-list",{templateUrl:'view/estampa.html',controller:'estampaController'})
     .when("/estampa/:id",{templateUrl:'view/estampa-detalhe.html',controller:'estampaDetalheController'})
     .when("/estampa-cad",{templateUrl:'view/estampa-cad.html',controller:'estampaController'})
     .when("/estampa-edit/:id",{templateUrl:'view/estampa-edit.html',controller:'estampaDetalheController'})
    


    .otherwise({redirectTo:'/'});
	
	
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
	
}); 