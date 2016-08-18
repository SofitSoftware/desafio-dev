'use strict';

var app = angular.module('vehicles', ['ngRoute']);

// lista de marcas
app.constant('brandList', [{ id: 1, name: 'Volkswagen' }, { id: 2, name: 'Nissan' }])

// lista de modelos
.constant('modelList', [{ id: 1, name: 'Gol', brand_id: 1 }, { id: 2, name: 'March', brand_id: 2 }])

.factory('removeVehicle', function($window, vehicleAPI) {
    return function(vehicle, callback) {
        // mensagem de confirmação
        var result = $window.confirm('Você tem certeza que deseja remover o veículo \'' + vehicle.name + '\'?');
        if(result) {
            // chama a factory da api para remover o veículo
            vehicleAPI.delete(vehicle.id, function(err, result) {
                return callback(err, !!result);
            });
        } else {
            return callback(null, false);
        }
    };
})

.factory('vehicleAPI', function($window, $http, $rootScope) {

    // Trata o erro da API
    var handleError = function(err, callback) {
        $rootScope.hasError = true;
        $rootScope.errorMessage = err.data.statusCode + ' - ' + err.data.message;
        return callback(err);
    };

    // Reseta o parâmetro do erro
    var resetError = function() {
        $rootScope.hasError = false;
    };

    return {
        // busca todos os veículos
        getAll: function(callback) {
            resetError();
            // chamada GET para a API
            return $http.get($window.API_URL + '/vehicles').then(function(data) {
                return callback(null, data.data);
            }).catch(function(err) {
                return handleError(err, callback);
            });
        },

        // cria um novo veículo
        create: function(params, callback) {
            resetError();
            // chamada POST para API
            return $http.post($window.API_URL + '/vehicles', params).then(function(data) {
                return callback(null, data.data);
            }).catch(function(err) {
                return handleError(err, callback);
            });
        },

        // busca um veículo por ID
        getOne: function(id, callback) {
            resetError();
            // chamada GET para a API
            return $http.get($window.API_URL + '/vehicles/' + id).then(function(data) {
                return callback(null, data.data);
            }).catch(function(err) {
                return handleError(err, callback);
            });
        },

        // atualiza um veículo por ID
        update: function(id, params, callback) {
            resetError();
            // chamada PUT para a API
            return $http.put($window.API_URL + '/vehicles/' + id, params).then(function(data) {
                return callback(null, data.data);
            }).catch(function(err) {
                return handleError(err, callback);
            });
        },

        // remove um veículo por ID
        delete: function(id, callback) {
            resetError();
            // chamada DELETE para a API
            return $http.delete($window.API_URL + '/vehicles/' + id).then(function(data) {
                return callback(null, data.data);
            }).catch(function(err) {
                return handleError(err, callback);
            });
        }
    };
})

.controller('MainController', function($scope, $route, $routeParams, $location) {
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
})

.controller('VehicleIndexController', function($scope, removeVehicle, brandList, modelList, vehicleAPI) {
    $scope.name = 'VehicleIndexController';
    $scope.vehicles = [];

    var getVehicles = function() {
        // chama a factory da api para buscar todos os veículos
        vehicleAPI.getAll(function(err, data) {
            $scope.vehicles = data;
        });
    };
    getVehicles();

    // função de remover
    $scope.remove = function(vehicle) {
        // chama a factory de remoção do veículo
        removeVehicle(vehicle, function(err, result) {
            if(result) {
                // sucesso, atualiza a listagem
                getVehicles();
            }
        });
    };

    $scope.getBrandLabel = function(brand_id) {
        var brand = brandList.find(function(brand) {
            return brand.id == brand_id;
        });

        return brand ? brand.name : '';
    };

    $scope.getModelLabel = function(model_id) {
        var model = modelList.find(function(model) {
            return model.id == model_id;
        });

        return model ? model.name : '';
    };
})

.controller('VehicleNewController', function($scope, $location, brandList, modelList, vehicleAPI) {
    $scope.name = 'VehicleNewController';
    $scope.brandList = brandList; // lista de marcas
    $scope.modelList = modelList; // lista de modelos
    $scope.isEditing = true; // controla o modo de edição do formulário

    // dados do veículo
    $scope.vehicle = {
        name: '',
        brand_id: '',
        model_id: '',
        license_plate: ''
    };

    // função de salvar
    $scope.save = function() {
        // chama a factory da api para salvar
        vehicleAPI.create($scope.vehicle, function(err, data) {
            if(data) {
                // sucesso, edireciona para a listagem
                $location.path('/vehicles');
            }
        });
    };
})

.controller('VehicleEditController', function($scope, $routeParams, $location, brandList, modelList, vehicleAPI) {
    $scope.name = 'VehicleEditController';
    $scope.params = $routeParams; // parâmetros da rota
    $scope.brandList = brandList; // lista de marcas
    $scope.modelList = modelList; // lista de modelos
    $scope.isEditing = true; // controla o modo de edição do formulário

    // dados do veículo
    $scope.vehicle = {};

    // chama a factory da api para buscar o veículo pelo id
    vehicleAPI.getOne($scope.params.id, function(err, data) {
        if(data) {
            $scope.vehicle = data;
        }
    });

    // função de salvar
    $scope.save = function() {
        // chama a factory da api para salvar
        vehicleAPI.update($scope.params.id, $scope.vehicle, function(err, data) {
            if(data) {
                // sucesso, edireciona para a listagem
                $location.path('/vehicles');
            }
        });
    };
})

.controller('VehicleShowController', function($scope, $routeParams, brandList, modelList, $location, removeVehicle, vehicleAPI) {
    $scope.name = 'VehicleShowController';
    $scope.params = $routeParams; // parâmetros da rota
    $scope.brandList = brandList; // lista de marcas
    $scope.modelList = modelList; // lista de modelos
    $scope.isEditing = false; // controla o modo de edição do formulário

    // dados do veículo
    $scope.vehicle = {};

    // chama a factory da api para buscar o veículo pelo id
    vehicleAPI.getOne($scope.params.id, function(err, data) {
        if(data) {
            $scope.vehicle = data;
        }
    });

    // função de remover
    $scope.remove = function(vehicle) {
        // chama a factory de remoção do veículo
        removeVehicle(vehicle, function(err, result) {
            if(result) {
                // sucesso, redireciona para a listagem
                $location.path('/vehicles');
            }
        });
    };
})

// configuração das rotas com os controllers e templates
.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/vehicles', {
        templateUrl: 'src/templates/vehicles/index.html',
        controller: 'VehicleIndexController'
    })
    .when('/vehicles/new', {
        templateUrl: 'src/templates/vehicles/form.html',
        controller: 'VehicleNewController'
    })
    .when('/vehicles/:id/edit', {
        templateUrl: 'src/templates/vehicles/form.html',
        controller: 'VehicleEditController'
    })
    .when('/vehicles/:id', {
        templateUrl: 'src/templates/vehicles/form.html',
        controller: 'VehicleShowController'
    });
});
