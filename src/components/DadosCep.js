import "./DadosCep.css";

export function DadosCep({ data }) {
  return (
    <div>
      {data === null || typeof data.cep === "undefined" ? (
        <div className="tagSemCep">
          <p>sem cep</p>
        </div>
      ) : (
        <>
          <div className="dadosCep">
            <dl>
              <dt>Cep</dt>
              <dd>{data.cep}</dd>
              <dt>Logradouro</dt>
              <dd>{data.logradouro}</dd>
              <dt>Bairro</dt>
              <dd>{data.bairro}</dd>
              <dt>Estado</dt>
              <dd>
                {data.uf}-{data.estado}
              </dd>
            </dl>
          </div>
        </>
      )}
    </div>
  );
}
