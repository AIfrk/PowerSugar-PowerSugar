import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({

  state : {
      loggedUser : null,
      nonNeuralModelSelected: "LinearSVC",
      currentNotebook: '',
      sklearnJSON : {"calibration": {}, "cluster": {"AffinityPropagation": {"__init__": [["self", "damping", "max_iter", "convergence_iter", "copy", "preference", "affinity", "verbose"], [0.5, 200, 15, "True", "None", "euclidean", "False"]]}, "AgglomerativeClustering": {"__init__": [["self", "n_clusters", "affinity", "memory", "connectivity", "compute_full_tree", "linkage", "pooling_func"], [2, "euclidean", "None", "None", "auto", "ward", "deprecated"]]}, "Birch": {"__init__": [["self", "threshold", "branching_factor", "n_clusters", "compute_labels", "copy"], [0.5, 50, 3, "True", "True"]]}, "DBSCAN": {"__init__": [["self", "eps", "min_samples", "metric", "metric_params", "algorithm", "leaf_size", "p", "n_jobs"], [0.5, 5, "euclidean", "None", "auto", 30, "None", "None"]]}, "KMeans": {"__init__": [["self", "n_clusters", "init", "n_init", "max_iter", "tol", "precompute_distances", "verbose", "random_state", "copy_x", "n_jobs", "algorithm"], [8, "k-means++", 10, 300, 0.0001, "auto", 0, "None", "True", "None", "auto"]]}, "FeatureAgglomeration": {"__init__": [["self", "n_clusters", "affinity", "memory", "connectivity", "compute_full_tree", "linkage", "pooling_func"], [2, "euclidean", "None", "None", "auto", "ward", "<function mean at 0x0000027988733D90>"]]}, "MeanShift": {"__init__": [["self", "bandwidth", "seeds", "bin_seeding", "min_bin_freq", "cluster_all", "n_jobs"], ["None", "None", "False", 1, "True", "None"]]}, "MiniBatchKMeans": {"__init__": [["self", "n_clusters", "init", "max_iter", "batch_size", "verbose", "compute_labels", "random_state", "tol", "max_no_improvement", "init_size", "n_init", "reassignment_ratio"], [8, "k-means++", 100, 100, 0, "True", "None", 0.0, 10, "None", 3, 0.01]]}, "SpectralClustering": {"__init__": [["self", "n_clusters", "eigen_solver", "random_state", "n_init", "gamma", "affinity", "n_neighbors", "eigen_tol", "assign_labels", "degree", "coef0", "kernel_params", "n_jobs"], [8, "None", "None", 10, 1.0, "rbf", 10, 0.0, "kmeans", 3, 1, "None", "None"]]}, "SpectralBiclustering": {"__init__": [["self", "n_clusters", "method", "n_components", "n_best", "svd_method", "n_svd_vecs", "mini_batch", "init", "n_init", "n_jobs", "random_state"], [3, "bistochastic", 6, 3, "randomized", "None", "False", "k-means++", 10, "None", "None"]]}, "SpectralCoclustering": {"__init__": [["self", "n_clusters", "svd_method", "n_svd_vecs", "mini_batch", "init", "n_init", "n_jobs", "random_state"], [3, "randomized", "None", "False", "k-means++", 10, "None", "None"]]}}, "covariance": {"EllipticEnvelope": {"__init__": [["self", "store_precision", "assume_centered", "support_fraction", "contamination", "random_state"], ["True", "False", "None", 0.1, "None"]]}, "EmpiricalCovariance": {"__init__": [["self", "store_precision", "assume_centered"], ["True", "False"]]}, "GraphLasso": {"__init__": [[], "None"]}, "GraphLassoCV": {"__init__": [[], "None"]}, "GraphicalLasso": {"__init__": [["self", "alpha", "mode", "tol", "enet_tol", "max_iter", "verbose", "assume_centered"], [0.01, "cd", 0.0001, 0.0001, 100, "False", "False"]]}, "GraphicalLassoCV": {"__init__": [["self", "alphas", "n_refinements", "cv", "tol", "enet_tol", "max_iter", "mode", "n_jobs", "verbose", "assume_centered"], [4, 4, "warn", 0.0001, 0.0001, 100, "cd", "None", "False", "False"]]}, "LedoitWolf": {"__init__": [["self", "store_precision", "assume_centered", "block_size"], ["True", "False", 1000]]}, "MinCovDet": {"__init__": [["self", "store_precision", "assume_centered", "support_fraction", "random_state"], ["True", "False", "None", "None"]]}, "OAS": {"__init__": [["self", "store_precision", "assume_centered"], ["True", "False"]]}, "ShrunkCovariance": {"__init__": [["self", "store_precision", "assume_centered", "shrinkage"], ["True", "False", 0.1]]}}, "cross_decomposition": {}, "datasets": {}, "decomposition": {"DictionaryLearning": {"__init__": [["self", "n_components", "alpha", "max_iter", "tol", "fit_algorithm", "transform_algorithm", "transform_n_nonzero_coefs", "transform_alpha", "n_jobs", "code_init", "dict_init", "verbose", "split_sign", "random_state", "positive_code", "positive_dict"], ["None", 1, 1000, 1e-08, "lars", "omp", "None", "None", "None", "None", "None", "False", "False", "None", "False", "False"]]}, "FastICA": {"__init__": [["self", "n_components", "algorithm", "whiten", "fun", "fun_args", "max_iter", "tol", "w_init", "random_state"], ["None", "parallel", "True", "logcosh", "None", 200, 0.0001, "None", "None"]]}, "IncrementalPCA": {"__init__": [["self", "n_components", "whiten", "copy", "batch_size"], ["None", "False", "True", "None"]]}, "KernelPCA": {"__init__": [["self", "n_components", "kernel", "gamma", "degree", "coef0", "kernel_params", "alpha", "fit_inverse_transform", "eigen_solver", "tol", "max_iter", "remove_zero_eig", "random_state", "copy_X", "n_jobs"], ["None", "linear", "None", 3, 1, "None", 1.0, "False", "auto", 0, "None", "False", "None", "True", "None"]]}, "MiniBatchDictionaryLearning": {"__init__": [["self", "n_components", "alpha", "n_iter", "fit_algorithm", "n_jobs", "batch_size", "shuffle", "dict_init", "transform_algorithm", "transform_n_nonzero_coefs", "transform_alpha", "verbose", "split_sign", "random_state", "positive_code", "positive_dict"], ["None", 1, 1000, "lars", "None", 3, "True", "None", "omp", "None", "None", "False", "False", "None", "False", "False"]]}, "MiniBatchSparsePCA": {"__init__": [["self", "n_components", "alpha", "ridge_alpha", "n_iter", "callback", "batch_size", "verbose", "shuffle", "n_jobs", "method", "random_state", "normalize_components"], ["None", 1, 0.01, 100, "None", 3, "False", "True", "None", "lars", "None", "False"]]}, "NMF": {"__init__": [["self", "n_components", "init", "solver", "beta_loss", "tol", "max_iter", "random_state", "alpha", "l1_ratio", "verbose", "shuffle"], ["None", "None", "cd", "frobenius", 0.0001, 200, "None", 0.0, 0.0, 0, "False"]]}, "PCA": {"__init__": [["self", "n_components", "copy", "whiten", "svd_solver", "tol", "iterated_power", "random_state"], ["None", "True", "False", "auto", 0.0, "auto", "None"]]}, "SparseCoder": {"__init__": [["self", "dictionary", "transform_algorithm", "transform_n_nonzero_coefs", "transform_alpha", "split_sign", "n_jobs", "positive_code"], ["omp", "None", "None", "False", "None", "False"]]}, "SparsePCA": {"__init__": [["self", "n_components", "alpha", "ridge_alpha", "max_iter", "tol", "method", "n_jobs", "U_init", "V_init", "verbose", "random_state", "normalize_components"], ["None", 1, 0.01, 1000, 1e-08, "lars", "None", "None", "None", "False", "None", "False"]]}, "FactorAnalysis": {"__init__": [["self", "n_components", "tol", "copy", "max_iter", "noise_variance_init", "svd_method", "iterated_power", "random_state"], ["None", 0.01, "True", 1000, "None", "randomized", 3, 0]]}, "TruncatedSVD": {"__init__": [["self", "n_components", "algorithm", "n_iter", "random_state", "tol"], [2, "randomized", 5, "None", 0.0]]}, "LatentDirichletAllocation": {"__init__": [["self", "n_components", "doc_topic_prior", "topic_word_prior", "learning_method", "learning_decay", "learning_offset", "max_iter", "batch_size", "evaluate_every", "total_samples", "perp_tol", "mean_change_tol", "max_doc_update_iter", "n_jobs", "verbose", "random_state", "n_topics"], [10, "None", "None", "batch", 0.7, 10.0, 10, 128, -1, 1000000.0, 0.1, 0.001, 100, "None", 0, "None", "None"]]}}, "dummy": {}, "ensemble": {"BaseEnsemble": {"__init__": [["self", "base_estimator", "n_estimators", "estimator_params"], [10, []]]}, "RandomForestClassifier": {"__init__": [["self", "n_estimators", "criterion", "max_depth", "min_samples_split", "min_samples_leaf", "min_weight_fraction_leaf", "max_features", "max_leaf_nodes", "min_impurity_decrease", "min_impurity_split", "bootstrap", "oob_score", "n_jobs", "random_state", "verbose", "warm_start", "class_weight"], ["warn", "gini", "None", 2, 1, 0.0, "auto", "None", 0.0, "None", "True", "False", "None", "None", 0, "False", "None"]]}, "RandomForestRegressor": {"__init__": [["self", "n_estimators", "criterion", "max_depth", "min_samples_split", "min_samples_leaf", "min_weight_fraction_leaf", "max_features", "max_leaf_nodes", "min_impurity_decrease", "min_impurity_split", "bootstrap", "oob_score", "n_jobs", "random_state", "verbose", "warm_start"], ["warn", "mse", "None", 2, 1, 0.0, "auto", "None", 0.0, "None", "True", "False", "None", "None", 0, "False"]]}, "RandomTreesEmbedding": {"__init__": [["self", "n_estimators", "max_depth", "min_samples_split", "min_samples_leaf", "min_weight_fraction_leaf", "max_leaf_nodes", "min_impurity_decrease", "min_impurity_split", "sparse_output", "n_jobs", "random_state", "verbose", "warm_start"], ["warn", 5, 2, 1, 0.0, "None", 0.0, "None", "True", "None", "None", 0, "False"]]}, "ExtraTreesClassifier": {"__init__": [["self", "n_estimators", "criterion", "max_depth", "min_samples_split", "min_samples_leaf", "min_weight_fraction_leaf", "max_features", "max_leaf_nodes", "min_impurity_decrease", "min_impurity_split", "bootstrap", "oob_score", "n_jobs", "random_state", "verbose", "warm_start", "class_weight"], ["warn", "gini", "None", 2, 1, 0.0, "auto", "None", 0.0, "None", "False", "False", "None", "None", 0, "False", "None"]]}, "ExtraTreesRegressor": {"__init__": [["self", "n_estimators", "criterion", "max_depth", "min_samples_split", "min_samples_leaf", "min_weight_fraction_leaf", "max_features", "max_leaf_nodes", "min_impurity_decrease", "min_impurity_split", "bootstrap", "oob_score", "n_jobs", "random_state", "verbose", "warm_start"], ["warn", "mse", "None", 2, 1, 0.0, "auto", "None", 0.0, "None", "False", "False", "None", "None", 0, "False"]]}, "BaggingClassifier": {"__init__": [["self", "base_estimator", "n_estimators", "max_samples", "max_features", "bootstrap", "bootstrap_features", "oob_score", "warm_start", "n_jobs", "random_state", "verbose"], ["None", 10, 1.0, 1.0, "True", "False", "False", "False", "None", "None", 0]]}, "BaggingRegressor": {"__init__": [["self", "base_estimator", "n_estimators", "max_samples", "max_features", "bootstrap", "bootstrap_features", "oob_score", "warm_start", "n_jobs", "random_state", "verbose"], ["None", 10, 1.0, 1.0, "True", "False", "False", "False", "None", "None", 0]]}, "IsolationForest": {"__init__": [["self", "n_estimators", "max_samples", "contamination", "max_features", "bootstrap", "n_jobs", "behaviour", "random_state", "verbose"], [100, "auto", "legacy", 1.0, "False", "None", "old", "None", 0]]}, "GradientBoostingClassifier": {"__init__": [["self", "loss", "learning_rate", "n_estimators", "subsample", "criterion", "min_samples_split", "min_samples_leaf", "min_weight_fraction_leaf", "max_depth", "min_impurity_decrease", "min_impurity_split", "init", "random_state", "max_features", "verbose", "max_leaf_nodes", "warm_start", "presort", "validation_fraction", "n_iter_no_change", "tol"], ["deviance", 0.1, 100, 1.0, "friedman_mse", 2, 1, 0.0, 3, 0.0, "None", "None", "None", "None", 0, "None", "False", "auto", 0.1, "None", 0.0001]]}, "GradientBoostingRegressor": {"__init__": [["self", "loss", "learning_rate", "n_estimators", "subsample", "criterion", "min_samples_split", "min_samples_leaf", "min_weight_fraction_leaf", "max_depth", "min_impurity_decrease", "min_impurity_split", "init", "random_state", "max_features", "alpha", "verbose", "max_leaf_nodes", "warm_start", "presort", "validation_fraction", "n_iter_no_change", "tol"], ["ls", 0.1, 100, 1.0, "friedman_mse", 2, 1, 0.0, 3, 0.0, "None", "None", "None", "None", 0.9, 0, "None", "False", "auto", 0.1, "None", 0.0001]]}, "AdaBoostClassifier": {"__init__": [["self", "base_estimator", "n_estimators", "learning_rate", "algorithm", "random_state"], ["None", 50, 1.0, "SAMME.R", "None"]]}, "AdaBoostRegressor": {"__init__": [["self", "base_estimator", "n_estimators", "learning_rate", "loss", "random_state"], ["None", 50, 1.0, "linear", "None"]]}, "VotingClassifier": {"__init__": [["self", "estimators", "voting", "weights", "n_jobs", "flatten_transform"], ["hard", "None", "None", "None"]]}}, "exceptions": {"NotFittedError": {}}, "externals": {}, "feature_extraction": {"DictVectorizer": {"__init__": [["self", "dtype", "separator", "sparse", "sort"], ["<class numpy.float64>", "=", "True", "True"]]}, "FeatureHasher": {"__init__": [["self", "n_features", "input_type", "dtype", "alternate_sign", "non_negative"], [1048576, "dict", "<class numpy.float64>", "True", "False"]]}}, "feature_selection": {"GenericUnivariateSelect": {"__init__": [["self", "score_func", "mode", "param"], ["<function f_classif at 0x000002798AA0E598>", "percentile", 1e-05]]}, "RFE": {"__init__": [["self", "estimator", "n_features_to_select", "step", "verbose"], ["None", 1, 0]]}, "RFECV": {"__init__": [["self", "estimator", "step", "min_features_to_select", "cv", "scoring", "verbose", "n_jobs"], [1, 1, "warn", "None", 0, "None"]]}, "SelectFdr": {"__init__": [["self", "score_func", "alpha"], ["<function f_classif at 0x000002798AA0E598>", 0.05]]}, "SelectFpr": {"__init__": [["self", "score_func", "alpha"], ["<function f_classif at 0x000002798AA0E598>", 0.05]]}, "SelectFwe": {"__init__": [["self", "score_func", "alpha"], ["<function f_classif at 0x000002798AA0E598>", 0.05]]}, "SelectKBest": {"__init__": [["self", "score_func", "k"], ["<function f_classif at 0x000002798AA0E598>", 10]]}, "SelectFromModel": {"__init__": [["self", "estimator", "threshold", "prefit", "norm_order", "max_features"], ["None", "False", 1, "None"]]}, "SelectPercentile": {"__init__": [["self", "score_func", "percentile"], ["<function f_classif at 0x000002798AA0E598>", 10]]}, "VarianceThreshold": {"__init__": [["self", "threshold"], [0.0]]}}, "gaussian_process": {"GaussianProcessRegressor": {"__init__": [["self", "kernel", "alpha", "optimizer", "n_restarts_optimizer", "normalize_y", "copy_X_train", "random_state"], ["None", 1e-10, "fmin_l_bfgs_b", 0, "False", "True", "None"]]}, "GaussianProcessClassifier": {"__init__": [["self", "kernel", "optimizer", "n_restarts_optimizer", "max_iter_predict", "warm_start", "copy_X_train", "random_state", "multi_class", "n_jobs"], ["None", "fmin_l_bfgs_b", 0, 100, "False", "True", "None", "one_vs_rest", "None"]]}}, "isotonic": {"IsotonicRegression": {"__init__": [["self", "y_min", "y_max", "increasing", "out_of_bounds"], ["None", "None", "True", "nan"]]}}, "kernel_approximation": {}, "kernel_ridge": {}, "linear_model": {"ARDRegression": {"__init__": [["self", "n_iter", "tol", "alpha_1", "alpha_2", "lambda_1", "lambda_2", "compute_score", "threshold_lambda", "fit_intercept", "normalize", "copy_X", "verbose"], [300, 0.001, 1e-06, 1e-06, 1e-06, 1e-06, "False", 10000.0, "True", "False", "True", "False"]]}, "BayesianRidge": {"__init__": [["self", "n_iter", "tol", "alpha_1", "alpha_2", "lambda_1", "lambda_2", "compute_score", "fit_intercept", "normalize", "copy_X", "verbose"], [300, 0.001, 1e-06, 1e-06, 1e-06, 1e-06, "False", "True", "False", "True", "False"]]}, "ElasticNet": {"__init__": [["self", "alpha", "l1_ratio", "fit_intercept", "normalize", "precompute", "max_iter", "copy_X", "tol", "warm_start", "positive", "random_state", "selection"], [1.0, 0.5, "True", "False", "False", 1000, "True", 0.0001, "False", "False", "None", "cyclic"]]}, "ElasticNetCV": {"__init__": [["self", "l1_ratio", "eps", "n_alphas", "alphas", "fit_intercept", "normalize", "precompute", "max_iter", "tol", "cv", "copy_X", "verbose", "n_jobs", "positive", "random_state", "selection"], [0.5, 0.001, 100, "None", "True", "False", "auto", 1000, 0.0001, "warn", "True", 0, "None", "False", "None", "cyclic"]]}, "Hinge": {}}, "manifold": {"LocallyLinearEmbedding": {"__init__": [["self", "n_neighbors", "n_components", "reg", "eigen_solver", "tol", "max_iter", "method", "hessian_tol", "modified_tol", "neighbors_algorithm", "random_state", "n_jobs"], [5, 2, 0.001, "auto", 1e-06, 100, "standard", 0.0001, 1e-12, "auto", "None", "None"]]}, "Isomap": {"__init__": [["self", "n_neighbors", "n_components", "eigen_solver", "tol", "max_iter", "path_method", "neighbors_algorithm", "n_jobs"], [5, 2, "auto", 0, "None", "auto", "auto", "None"]]}, "MDS": {"__init__": [["self", "n_components", "metric", "n_init", "max_iter", "verbose", "eps", "n_jobs", "random_state", "dissimilarity"], [2, "True", 4, 300, 0, 0.001, "None", "None", "euclidean"]]}, "SpectralEmbedding": {"__init__": [["self", "n_components", "affinity", "gamma", "random_state", "eigen_solver", "n_neighbors", "n_jobs"], [2, "nearest_neighbors", "None", "None", "None", "None", "None"]]}, "TSNE": {"__init__": [["self", "n_components", "perplexity", "early_exaggeration", "learning_rate", "n_iter", "n_iter_without_progress", "min_grad_norm", "metric", "init", "verbose", "random_state", "method", "angle"], [2, 30.0, 12.0, 200.0, 1000, 300, 1e-07, "euclidean", "random", 0, "None", "barnes_hut", 0.5]]}}, "metrics": {"SCORERS": {}}, "mixture": {"GaussianMixture": {"__init__": [["self", "n_components", "covariance_type", "tol", "reg_covar", "max_iter", "n_init", "init_params", "weights_init", "means_init", "precisions_init", "random_state", "warm_start", "verbose", "verbose_interval"], [1, "full", 0.001, 1e-06, 100, 1, "kmeans", "None", "None", "None", "None", "False", 0, 10]]}, "BayesianGaussianMixture": {"__init__": [["self", "n_components", "covariance_type", "tol", "reg_covar", "max_iter", "n_init", "init_params", "weight_concentration_prior_type", "weight_concentration_prior", "mean_precision_prior", "mean_prior", "degrees_of_freedom_prior", "covariance_prior", "random_state", "warm_start", "verbose", "verbose_interval"], [1, "full", 0.001, 1e-06, 100, 1, "kmeans", "dirichlet_process", "None", "None", "None", "None", "None", "None", "False", 0, 10]]}}, "model_selection": {"BaseCrossValidator": {"__init__": [["self"], "None"]}, "GridSearchCV": {"__init__": [["self", "estimator", "param_grid", "scoring", "fit_params", "n_jobs", "iid", "refit", "cv", "verbose", "pre_dispatch", "error_score", "return_train_score"], ["None", "None", "None", "warn", "True", "warn", 0, "2*n_jobs", "raise-deprecating", "warn"]]}, "TimeSeriesSplit": {"__init__": [["self", "n_splits", "max_train_size"], ["warn", "None"]]}, "KFold": {"__init__": [["self", "n_splits", "shuffle", "random_state"], ["warn", "False", "None"]]}, "GroupKFold": {"__init__": [["self", "n_splits"], ["warn"]]}, "GroupShuffleSplit": {"__init__": [["self", "n_splits", "test_size", "train_size", "random_state"], [5, "default", "None", "None"]]}, "LeaveOneGroupOut": {"__init__": [["self"], "None"]}, "LeaveOneOut": {"__init__": [["self"], "None"]}, "LeavePGroupsOut": {"__init__": [["self", "n_groups"], "None"]}, "LeavePOut": {"__init__": [["self", "p"], "None"]}, "RepeatedKFold": {"__init__": [["self", "n_splits", "n_repeats", "random_state"], [5, 10, "None"]]}, "RepeatedStratifiedKFold": {"__init__": [["self", "n_splits", "n_repeats", "random_state"], [5, 10, "None"]]}, "ParameterGrid": {"__init__": [["self", "param_grid"], "None"]}, "