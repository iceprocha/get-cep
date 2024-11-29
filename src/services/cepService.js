import axios from "axios";

const baseURL = "https://viacep.com.br/ws/";

const cepService = {
  async getCepOrFake(cep, isfake = false) {
    if (isfake) return await this.getCepFake(cep);
    return await this.getCep(cep);
  },

  async getCep(cep) {
    if (cep === null || cep === "") return null;
    return axios.get(`${baseURL}${cep.replace("-", "")}/json`);
  },

  //get cep fake
  async getCepFake(cep) {
    if (cep === null || cep === "") return null;

    if (cep === "0") return null;

    return {
      data: {
        cep: "12345-678",
        logradouro: "Rua das Laranjeiras",
        bairro: "Centro",
        uf: "SP",
        estado: "São Paulo",
      },
    };
  },
};

export default cepService;
