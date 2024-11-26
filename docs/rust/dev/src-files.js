var srcIndex = new Map(JSON.parse('[\
["polars",["",[["docs",[],["eager.rs","lazy.rs","mod.rs","performance.rs"]]],["export.rs","lib.rs","prelude.rs"]]],\
["polars_core",["",[["chunked_array",[["arithmetic",[],["decimal.rs","mod.rs","numeric.rs"]],["builder",[["list",[],["anonymous.rs","binary.rs","boolean.rs","categorical.rs","dtypes.rs","mod.rs","null.rs","primitive.rs"]]],["boolean.rs","mod.rs","null.rs","primitive.rs","string.rs"]],["comparison",[],["categorical.rs","mod.rs","scalar.rs"]],["iterator",[["par",[],["list.rs","mod.rs","string.rs"]]],["mod.rs"]],["list",[],["iterator.rs","mod.rs"]],["logical",[["categorical",[["ops",[],["append.rs","full.rs","mod.rs","unique.rs","zip.rs"]]],["builder.rs","from.rs","merge.rs","mod.rs","revmap.rs","string_cache.rs"]]],["decimal.rs","mod.rs"]],["object",[["extension",[],["drop.rs","list.rs","mod.rs","polars_extension.rs"]]],["builder.rs","is_valid.rs","iterator.rs","mod.rs","registry.rs"]],["ops",[["aggregate",[],["float_sum.rs","mod.rs","quantile.rs","var.rs"]],["sort",[],["arg_sort.rs","arg_sort_multiple.rs","categorical.rs","mod.rs"]],["unique",[],["mod.rs"]]],["any_value.rs","append.rs","apply.rs","arity.rs","bit_repr.rs","chunkops.rs","compare_inner.rs","decimal.rs","downcast.rs","explode.rs","explode_and_offsets.rs","extend.rs","fill_null.rs","filter.rs","float_sorted_arg_max.rs","for_each.rs","full.rs","gather.rs","min_max_binary.rs","mod.rs","nulls.rs","reverse.rs","rolling_window.rs","search_sorted.rs","set.rs","shift.rs","zip.rs"]],["temporal",[],["conversion.rs","mod.rs"]]],["bitwise.rs","cast.rs","collect.rs","drop.rs","float.rs","from.rs","mod.rs","ndarray.rs","random.rs","to_vec.rs","trusted_len.rs","upstream_traits.rs"]],["datatypes",[],["aliases.rs","any_value.rs","dtype.rs","field.rs","mod.rs","static_array_collect.rs","time_unit.rs"]],["frame",[["group_by",[["aggregations",[],["agg_list.rs","boolean.rs","dispatch.rs","mod.rs","string.rs"]]],["expr.rs","hashing.rs","into_groups.rs","mod.rs","perfect.rs","proxy.rs"]],["row",[],["av_buffer.rs","dataframe.rs","mod.rs","transpose.rs"]]],["arithmetic.rs","chunks.rs","explode.rs","from.rs","mod.rs","top_k.rs","upstream_traits.rs"]],["hashing",[],["identity.rs","mod.rs","vector_hasher.rs"]],["series",[["arithmetic",[],["borrowed.rs","mod.rs","owned.rs"]],["implementations",[],["binary.rs","binary_offset.rs","boolean.rs","categorical.rs","decimal.rs","floats.rs","list.rs","mod.rs","null.rs","object.rs","string.rs"]],["ops",[],["downcast.rs","extend.rs","mod.rs","null.rs","to_list.rs"]]],["any_value.rs","comparison.rs","from.rs","into.rs","iterator.rs","mod.rs","series_trait.rs","unstable.rs"]],["utils",[],["flatten.rs","mod.rs","series.rs","supertype.rs"]]],["config.rs","error.rs","export.rs","fmt.rs","functions.rs","lib.rs","named_from.rs","prelude.rs","random.rs","schema.rs","testing.rs"]]],\
["polars_io",["",[["avro",[],["mod.rs","read.rs","write.rs"]],["cloud",[],["adaptors.rs","glob.rs","mod.rs","object_store_setup.rs","options.rs","polars_object_store.rs"]],["csv",[["read_impl",[],["batched_mmap.rs","batched_read.rs","mod.rs"]]],["buffer.rs","mod.rs","parser.rs","read.rs","splitfields.rs","utils.rs","write.rs","write_impl.rs"]],["ipc",[],["ipc_file.rs","ipc_reader_async.rs","ipc_stream.rs","mmap.rs","mod.rs","write.rs","write_async.rs"]],["json",[],["infer.rs","mod.rs"]],["ndjson",[],["buffer.rs","core.rs","mod.rs"]],["parquet",[],["async_impl.rs","mmap.rs","mod.rs","predicates.rs","read.rs","read_impl.rs","write.rs"]]],["export.rs","lib.rs","mmap.rs","options.rs","partition.rs","pl_async.rs","predicates.rs","prelude.rs","utils.rs"]]],\
["polars_lazy",["",[["dsl",[],["eval.rs","functions.rs","into.rs","list.rs","mod.rs"]],["frame",[],["err.rs","exitable.rs","mod.rs","pivot.rs","python.rs"]],["physical_plan",[["executors",[["scan",[],["csv.rs","ipc.rs","mod.rs","ndjson.rs","parquet.rs","support.rs"]]],["cache.rs","executor.rs","ext_context.rs","filter.rs","group_by.rs","group_by_dynamic.rs","group_by_partitioned.rs","group_by_rolling.rs","hconcat.rs","join.rs","mod.rs","projection.rs","projection_simple.rs","projection_utils.rs","python_scan.rs","slice.rs","sort.rs","stack.rs","udf.rs","union.rs","unique.rs"]],["expressions",[],["aggregation.rs","alias.rs","apply.rs","binary.rs","cast.rs","column.rs","count.rs","filter.rs","group_iter.rs","literal.rs","mod.rs","rolling.rs","slice.rs","sort.rs","sortby.rs","take.rs","ternary.rs","window.rs"]],["planner",[],["expr.rs","lp.rs","mod.rs"]],["streaming",[],["checks.rs","construct_pipeline.rs","convert_alp.rs","mod.rs","tree.rs"]]],["exotic.rs","file_cache.rs","mod.rs","node_timer.rs","state.rs"]],["scan",[],["anonymous_scan.rs","csv.rs","file_list_reader.rs","ipc.rs","mod.rs","ndjson.rs","parquet.rs"]]],["dot.rs","lib.rs","prelude.rs","utils.rs"]]],\
["polars_ops",["",[["chunked_array",[["binary",[],["mod.rs","namespace.rs"]],["gather",[],["mod.rs"]],["list",[],["count.rs","dispersion.rs","min_max.rs","mod.rs","namespace.rs","sum_mean.rs"]],["strings",[],["mod.rs"]]],["mod.rs","scatter.rs","sum.rs"]],["frame",[["join",[["hash_join",[],["mod.rs","multiple_keys.rs","single_keys.rs","single_keys_dispatch.rs","single_keys_inner.rs","single_keys_left.rs","single_keys_outer.rs","sort_merge.rs"]]],["args.rs","cross_join.rs","general.rs","mod.rs"]]],["mod.rs"]],["series",[["ops",[],["arg_min_max.rs","clip.rs","horizontal.rs","index.rs","int_range.rs","mod.rs","negate.rs","not.rs","various.rs"]]],["mod.rs"]]],["lib.rs","prelude.rs"]]],\
["polars_sql",["",[],["context.rs","function_registry.rs","functions.rs","keywords.rs","lib.rs","sql_expr.rs","table_functions.rs"]]],\
["polars_time",["",[["chunkedarray",[["string",[],["infer.rs","mod.rs","patterns.rs","strptime.rs"]]],["kernels.rs","mod.rs"]],["group_by",[],["mod.rs"]],["series",[],["mod.rs"]],["windows",[],["bounds.rs","calendar.rs","duration.rs","group_by.rs","mod.rs","window.rs"]]],["base_utc_offset.rs","date_range.rs","dst_offset.rs","lib.rs","month_end.rs","month_start.rs","prelude.rs","round.rs","truncate.rs","upsample.rs","utils.rs"]]],\
["polars_utils",["",[["iter",[],["enumerate_idx.rs","fallible.rs","mod.rs"]]],["abs_diff.rs","aliases.rs","arena.rs","atomic.rs","cache.rs","cell.rs","clmul.rs","contention_pool.rs","cpuid.rs","error.rs","float.rs","floor_divmod.rs","fmt.rs","functions.rs","hashing.rs","idx_vec.rs","index.rs","io.rs","lib.rs","macros.rs","mem.rs","min_max.rs","nulls.rs","ord.rs","partitioned.rs","slice.rs","sort.rs","sync.rs","sys.rs","total_ord.rs","unwrap.rs","vec.rs"]]]\
]'));
createSrcSidebar();
