import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

  state : {
      loggedUser : null,
      nonNeuralModelSelected: "LinearSVC",
      currentNotebook: '',
      sklearnJSON : {"calibration": {}, "cluster": {"AffinityPropagation": {"__init__": [["self", "damping", "max_iter", "convergence_iter", "copy", "preference", "affinity", "verbose"], [0.5, 200, 15, "True", "None", "euclidean", "False"]]}, "AgglomerativeClustering": {"__init__": [["self", "n_clusters", "affinity", "memory", "connectivity", "compute_full_tree", "linkage", "pooling_func"], [2, "euclidean", "None