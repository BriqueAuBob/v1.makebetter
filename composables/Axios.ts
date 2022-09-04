import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const client = axios.create({
  baseURL: "https://api.umaestro.fr/",
  // baseURL: "http://localhost:3333/",
});

client.interceptors.request.use(function (config: AxiosRequestConfig) {
  // @ts-ignore
  if (process.server) return config;
  config.headers.Authorization =
    "Bearer " + localStorage.getItem("access_token");

  return config;
});

client.interceptors.response.use(
  async function (value: AxiosResponse) {
    // @ts-ignore
    if (process.client) {
      try {
        // @ts-ignore
        const { $toast } = useNuxtApp();

        if (value.data.success && value.data.message) {
          $toast.show({
            type: "success",
            message: value.data.message,
            timeout: 5,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
    return value;
  },
  function (error) {
    // @ts-ignore
    if (process.client) {
      try {
        // @ts-ignore
        const { $toast } = useNuxtApp();

        if (error.response.data?.errors) {
          const errors = error.response.data?.errors.map(
            (error) => error.message
          );
          for (const error of errors) {
            $toast.show({
              type: "danger",
              message: error,
              timeout: 5,
            });
          }
        } else {
          $toast.show({
            type: "danger",
            message: "Le serveur a rencontré une erreur.",
            timeout: 5,
          });
        }
      } catch (err) {
        console.log(err);
      }
      return Promise.reject(error);
    }
  }
);

export default client;
