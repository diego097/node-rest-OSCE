const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Proveedores',
        prov_1: 'casa',
        prov_2: 'bosch',
        prov_3: 'bosch',
        prov_4: 'bSJ'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Manejo de solicitudes POST para /vendors'
    });
});

router.get('/:vendorId', (req, res, next) => {

    const id = req.params.vendorId;
    if(id === 'casa'){
        res.status(200).json({
            message: 'Datos de la Empresa CASA.SAC',
            id: id,
            nombre: 'CASA.SAC',
            ruc: '20100151312',
            obras_inconclusas: 'no',
            proveedor_del_estado: 'si',
            vinculo_congresistas: 'no',
            vinculo_municipalidad: 'no',
            rubro: 'construcción'
        });  
    }if(id === 'bosch'){
        res.status(200).json({
            message: 'Datos de la Empresa BOSCH',
            id: id,
            nombre: 'LIBRERIA BOSCH',
            ruc: '20100151344',
            obras_inconclusas: 'no',
            proveedor_del_estado: 'si',
            vinculo_congresistas: 'no',
            vinculo_municipalidad: 'no',
            rubro: 'libreria'
        }); 
    }if(id === 'softwareSA'){
        res.status(200).json({
            message: 'Datos de la Empresa Software SA',
            id: id,
            nombre: 'Software SA',
            ruc: '20100151384',
            obras_inconclusas: 'no',
            proveedor_del_estado: 'si',
            vinculo_congresistas: 'no',
            vinculo_municipalidad: 'no',
            rubro: 'software'
        }); 
    }if(id === 'abSJ'){
        res.status(200).json({
            message: 'Datos de la Empresa ABARROTES SAN JUAN E.I.R.L.',
            id: id,
            nombre: 'ABARROTES SAN JUAN',
            ruc: '20100151184',
            obras_inconclusas: 'si',
            proveedor_del_estado: 'si',
            vinculo_congresistas: 'no',
            vinculo_municipalidad: 'no',
            rubro: 'abarrotes'
        }); 
    }
    else{
        res.status(200).json({
            message: 'Tienes que pasar un ID'
        });
    }
    
});

module.exports = router;