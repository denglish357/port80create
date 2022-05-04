import store from "../store";

export default (to, from, next) => {
  if (
    store.getters.user !== null
    //   store.getters.user.status === "active" ||
    //   store.getters.user.status === "succeeded" ||
    //   store.getters.user.status === "trialing"
  ) {
    //   if (store.getters.user.emailVerified) {
    //     next();
    //   } else {
    //     alert(
    //       "Verifique su cuenta de correo electrónico e inicie sesión nuevamente"
    //     );
    //   }
    next();
  } else {
    // if (store.getters.user.status === "expired") {
    //   alert(
    //     "Lo sentimos, pero su suscripción ha caducado. Dirígete al enlace del perfil en la parte superior de esta página y actualiza tu suscripción."
    //   );
    //   next("plan");
    // } else {
    //   alert("Por favor crear una cuenta para utalizar nuestra website");
    //   next("/auth");
    // }
    next("/auth");
  }
};
