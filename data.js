// TOV Price List 
var tovPriceList = {
    tax_system: {
        tax_system_single: 2000,
        tax_system_single_pdv: 3000,
        tax_system_common: 2500,
        tax_system_common_pdv:  4000
    },
        
    services: {
        opt: 1000,
        rozdribna:1500,
        poslugy: 1000,
        vyrobnyctvo: 2000,
    },
    complex_services: {
        budivnyctvo: 2000,
        silske_gospodarstvo: 3000,
        zovn_ekon_diyalnist: 4000,
        inshe: 500
    },
    additional_services: {
        akcyz: 3500,
        lystuvannya: 2000,
    },
    kas_apparat: {
        kas_apparat_odyn: 1000,
    },
    zarplata: {
        zarplata_odyn: 200
    },
    kadry: {
        kadry_odyn: 150
    },
    realizaciya: {
       vyhidni_doc_odyn:  25,
       podatk_nakladni_odyn: 50
    },
    bank: {
        platezy_odyn: 40,
    },
    pervynna_doc: {
        pervynna_doc_1_50: 1500,
        pervynna_doc_bilshe_50: 30
    },
    nomenclatura: {
        nomenclatura_odyn: 1.50,
    }
        
}
// FOP Price List 
var fopPriceList = {
    tax_system: {
        tax_system_single: 500,
        tax_system_single_pdv: 2500,
        tax_system_common: 2000,
        tax_system_common_pdv:  3000
    },
        
    services: {
        opt: 1000,
        rozdribna:1500,
        poslugy: 1000,
        vyrobnyctvo: 2000,
     },
    complex_services: {
        budivnyctvo: 2000,
        silske_gospodarstvo: 3000,
        zovn_ekon_diyalnist: 2000,
        inshe: 500
    },
    additional_services: {
        akcyz: 2500,
        lystuvannya: 2000,
    },
    kas_apparat: {
        kas_apparat_odyn: 500,
    },
    zarplata: {
        zarplata_odyn: 200
    },
    kadry: {
        kadry_odyn: 150
    },
    realizaciya: {
       vyhidni_doc_odyn:  25,
       podatk_nakladni_odyn: 50
    },
    bank: {
        platezy_odyn: 40,
    },
    pervynna_doc: {
        pervynna_doc_1_50: 1500,
        pervynna_doc_bilshe_50: 30
    },
    nomenclatura: {
        nomenclatura_odyn: 1.50,
    }
        
}
// Client data collected frome service_calc form
var clientData = {
    ownership_form: "",
    tax_system: "",
    services: [],
    complex_services: [],
    additional_services: [],
    kas_apar_kilk: 0,
    zarplata: {
        zarplata_kilk: 0,
        zarplata_vartist: 0,
    },
    kadry: {
        kadry_kilk: 0,
        kadry_vartist: 0,
    },
    
    realizaciya: {
        vyhidni_doc_kilk: 0,
        vyhidni_doc_vartist: 0,
        podatk_nakladni_kilk: 0,
        podatk_nakladni_vartist: 0,
    },
    bank: {
        platezy_kilk: 0,
        bank_vartist: 0
    },
    pervynna_doc: {
        pervynna_doc_kilk: 0,
        pervynna_doc_vartist: 0
    },
    nomenclatura: {
        nomenclatura_kilk: 0,
        nomenclatura_vartist: 0
    }
    
};
// Current cost to show on page
// Recalculated sum on every change of any input 
var currentSum = {
    tax_system: {
        tax_system_single: 0,
        tax_system_single_pdv: 0,
        tax_system_common: 0,
        tax_system_common_pdv: 0
    },
    services: {
        opt: 0,
        rozdribna: 0,
        poslugy: 0,
        vyrobnyctvo: 0,
    },
    complex_services: {
        budivnyctvo: 0,
        silske_gospodarstvo: 0,
        zovn_ekon_diyalnist: 0,
        inshe: 0
    },
    additional_services: {
        akcyz: 0,
        lystuvannya: 0,
    },
    kas_apparat: {
        kas_apparat: 0,
        kas_apparat_vartist: 0,
    },
    zarplata: {
        zarplata: 0,
        zarplata_vartist: 0
    },
    kadry: {
        kadry: 0,
        kadry_vartist: 0
    },
    realizaciya: {
        vyhidni_doc: 0,
        vyhidni_doc_vartist:  0,
        podatk_nakladni: 0,
        podatk_nakladni_vartist: 0
    },
    bank: {
        bank: 0,
        bank_vartist: 0,
    },
    pervynna_doc: {
        pervynna_doc: 0,
        pervynna_doc_vartist: 0
    },
    nomenclatura: {
        nomenclatura: 0,
        nomenclatura_vartist: 0
    }

    
}