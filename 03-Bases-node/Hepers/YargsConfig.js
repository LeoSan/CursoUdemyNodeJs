const argv = require('yargs')
                .option('b', {
                    alias:'base',
                    type:'number',
                    demandOption:true
                })
                .option('h', {
                    alias:'hasta',
                    type:'number',
                    describe:'Hasta donde quieres la tabla'
                })                
                .option('l', {
                    alias:'listar',
                    type:'boolean',
                })
                .option('o', {
                    alias:'operacion',
                    type:'string',
                    describe:'/ Dividir, * Multiplicar'
                })                
                .check((argv, option)=>{
                     if(isNaN(argv.base)){
                        throw 'La base tiene que ser un numero'
                     } 
                     if(isNaN(argv.hasta)){
                        throw 'La base tiene que ser un numero'
                     }
                     
                     /*if(isNaN(argv.operacion) || argv.operacion!='*' || argv.operacion!='/' ){
                        throw 'Lo siento por el momento solo se puede dividir y multiplicar'
                     }*/
                     return true; 
                })              
                .argv;

module.exports = {
    argv
}
                
                
                