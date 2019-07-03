const increment = (context, step) => {
  context.commit('increment', step)
}

export default {
  increment,
}
