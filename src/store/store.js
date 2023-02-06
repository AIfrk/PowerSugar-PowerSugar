import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

  state : {
      loggedUser : null,
      nonNeuralModelSelected: "LinearSVC",
      currentNotebook: '',
      sklearnJSON : {"calibration": {}, "cluster": {"AffinityPropagation": {"__init__": [["self", "damping", "max_iter", "convergence_iter", "copy", "preference", "affinity", "verbose"], [0.5, 200, 15, "True", "None", "euclidean", "False"]]}, "AgglomerativeClustering": {"__init__": [["self", "n_clusters", "affinity", "memory", "connectivity", "compute_full_tree", "linkage", "pooling_func"], [2, "euclidean", "None", "None", "auto", "ward", "deprecated"]]}, "Birch": {"__init__": [["self", "threshold", "branching_factor", "n_clusters", "compute_labels", "copy"], [0.5, 50, 3, "True", "True"]]}, "DBSCAN": {"__init__": [["self", "eps", "min_samples", "metric", "metric_params", "algorithm", "leaf_size", "p", "n_jobs"], [0.5, 5, "euclidean", "None", "auto", 30, "None", "None"]]}, "KMeans": {"__init__": [["self", "n_clusters", "init", "n_init", "max_iter", "tol", "precompute_distances", "verbose", "random_state", "copy_x", "n_jobs", "algorithm"], [8, "k-means++", 10, 300, 0.0001, "auto", 0, "None", "True", "None", "auto"]]}, "FeatureAgglomeration": {"__init__": [["self", "n_clusters", "affinity", "memory", "connectivity", "compute_full_tree", "linkage", "pooling_func"], [2, "euclidean", "None", "None", "auto", "ward", "<function mean at 0x0000027988733D90>"]]}, "MeanShift": {"__init__": [["self", "bandwidth", "seeds", "bin_seeding", "min_bin_freq", "cluster_all", "n_jobs"], ["None", "None", "False", 1, "True", "None"]]}, "MiniBatchKMeans": {"__init__": [["self", "n_clusters", "init", "max_iter", "batch_size", "verbose", "compute_labels", "random_state", "tol", "max_no_improvement", "init_size", "n_init", "reassignment_ratio"], [8, "k-means++", 100, 100, 0, "True", "None", 0.0, 10, "None", 3, 0.01]]}, "SpectralClustering": {"__init__": [["self", "n_clusters", "eigen_solver", "random_state", "n_init", "gamma", "affinity", "n_neighbors", "eigen_tol", "assign_labels", "degree", "coef0", "kernel_params", "n_jobs"], [8, "None", "None", 10, 1.0, "rbf", 10, 0.0, "kmeans", 3, 1, "None", "None"]]}, "SpectralBiclustering": {"__init__": [["self", "n_clusters", "method", "n_components", "n_best", "svd_method", "n_svd_vecs", "mini_batch", "init", "n_init", "n_jobs", "random_state"], [3, "bistochastic", 6, 3, "randomized", "None", "False", "k-means++", 10, "None", "None"]]}, "SpectralCoclustering": {"__init__": [["self", "n_clusters", "svd_method", "n_svd_vecs", "mini_batch", "init", "n_init", "n_jobs", "random_state"], [3, "randomized", "None", "False", "k-means++", 10, "None", "None"]]}}, "covariance": {"EllipticEnvelope": {"__init__": [["self", "store_precision", "assume_centered", "support_fraction", "contamination", "random_state"], ["True", "False", "None", 0.1, "None"]]}, "EmpiricalCovariance": {"__init__": [["self", "store_precision", "assume_centered"], ["True", "False"]]}, "GraphLasso": {"__init__": [[], "None"]}, "GraphLassoCV": {"__init__": [[], "None"]}, "Graphical