import http from 'k6/http';
import { check, sleep } from 'k6';

export let option={
    vus: 10, // 10 usuarios virtuales 
    duration: '10s', // ejecutar la prueba durante 10 segundos
};

export default function (){
    let res= http.get('https://test-api.k6.io/public/crocodiles/')
    check(res,{
        'el estado es 200': (r)=> r.status ===200,
        'respuesta en menos de 500ms': (r)=> r.timings.duration < 500,        

    })
    sleep(1)
}