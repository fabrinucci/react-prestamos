
const Resultado = ({total, plazo, cantidad}) => ( 
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: <strong>${cantidad}</strong></p>
            <p>A pagar en: <strong>{plazo} Meses</strong></p>
            <p>Su pago mensual es de: <strong>${ (total / plazo).toFixed(1) }</strong></p>
            <p>Total a pagar: <strong>${total}</strong></p>

        </div>
);

 
export default Resultado;