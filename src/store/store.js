import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

  state : {
      loggedUser : null,
      nonNeuralModelSelected: "LinearSVC",
      currentNotebook: '',
      sklearnJSON : {"calibration": {}, "cluster": {"AffinityPropagation": {"__init__": [["self", "damping", "max_iter", "convergence_iter", "copy", "preference", "affinity", "verbose"], [0.5, 200, 15, "True", "None", "euclidean", "False"]]}, "AgglomerativeClustering": {"__init__": [["self", "n_clusters", "affinity", "memory", "connectivity", "compute_full_tree", "linkage", "pooling_func"], [2, "euclidean", "None", "None", "auto", "ward", "deprecated"]]}, "Birch": {"__init__": [["self", "threshold", "branching_factor", "n_clusters", "compute_labels", "copy"], [0.5, 50, 3, "True", "True"]]}, "DBSCAN": {"__init__": [["self", "eps", "min_samples", "metric", "metric_params", "algorithm", "leaf_size", "p", "n_jobs"], [0.5, 5, "euclidean", "None", "auto", 30, "None", "None"]]}, "KMeans": {"__init__": [["self", "n_clusters", "init", "n_init", "max_iter", "tol", "precompute_distances", "verbose", "random_state", "copy_x", "n_jobs", "algorithm"], [8, "k-means++", 10, 300, 0.0001, "auto", 0, "None", "True", "None", "auto"]]}, "FeatureAgglomeration": {"__init__": [["self", "n_clusters", "affinity", "memory", "connectivity", "compute_full_tree", "linkage", "pooling_func"], [2, "euclidean", "None", "None", "auto", "ward", "<function mean at 0x0000027988733D90>"]]}, "MeanShift": {"__init__": [["self", "bandwidth", "seeds", "bin_seeding", "min_bin_freq", "cluster_all", "n_jobs"], ["None", "No