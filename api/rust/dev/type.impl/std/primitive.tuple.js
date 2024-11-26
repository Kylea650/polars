(function() {
    var type_impls = Object.fromEntries([["polars",[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Bounded-for-(S,+T)\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/num-traits/0.2/src/num_traits/bounds.rs.html#112\">Source</a><a href=\"#impl-Bounded-for-(S,+T)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;S, T&gt; <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/bounds/trait.Bounded.html\" title=\"trait num_traits::bounds::Bounded\">Bounded</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(S, T)</a><div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/bounds/trait.Bounded.html\" title=\"trait num_traits::bounds::Bounded\">Bounded</a>,\n    T: <a class=\"trait\" href=\"https://docs.rs/num-traits/0.2/num_traits/bounds/trait.Bounded.html\" title=\"trait num_traits::bounds::Bounded\">Bounded</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.min_value\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/num-traits/0.2/src/num_traits/bounds.rs.html#112\">Source</a><a href=\"#method.min_value\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/num-traits/0.2/num_traits/bounds/trait.Bounded.html#tymethod.min_value\" class=\"fn\">min_value</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(S, T)</a></h4></section></summary><div class='docblock'>Returns the smallest finite number this type can represent</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.max_value\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/num-traits/0.2/src/num_traits/bounds.rs.html#112\">Source</a><a href=\"#method.max_value\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/num-traits/0.2/num_traits/bounds/trait.Bounded.html#tymethod.max_value\" class=\"fn\">max_value</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(S, T)</a></h4></section></summary><div class='docblock'>Returns the largest finite number this type can represent</div></details></div></details>","Bounded","polars::frame::group_by::IdxItem","polars::frame::group_by::BorrowIdxItem","polars::prelude::LeftJoinIds","polars::prelude::InnerJoinIds"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-(T0,+T1)\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/serde/1.0.215/src/serde/de/impls.rs.html#1492-1508\">Source</a><a href=\"#impl-Deserialize%3C'de%3E-for-(T0,+T1)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T0, T1&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T0, T1)</a><div class=\"where\">where\n    T0: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,\n    T1: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/serde/1.0.215/src/serde/de/impls.rs.html#1492-1508\">Source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(\n    deserializer: D,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T0, T1)</a>, &lt;D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.215/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","polars::frame::group_by::IdxItem","polars::frame::group_by::BorrowIdxItem","polars::prelude::LeftJoinIds","polars::prelude::InnerJoinIds"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromParallelIterator%3C(A,+B)%3E-for-(FromA,+FromB)\" class=\"impl\"><a href=\"#impl-FromParallelIterator%3C(A,+B)%3E-for-(FromA,+FromB)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B, FromA, FromB&gt; FromParallelIterator&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(FromA, FromB)</a><div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    FromA: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + FromParallelIterator&lt;A&gt;,\n    FromB: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + FromParallelIterator&lt;B&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_par_iter\" class=\"method trait-impl\"><a href=\"#method.from_par_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">from_par_iter</a>&lt;I&gt;(pi: I) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(FromA, FromB)</a><div class=\"where\">where\n    I: IntoParallelIterator&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a>&gt;,</div></h4></section></summary><div class='docblock'>Creates an instance of the collection from the parallel iterator <code>par_iter</code>. <a>Read more</a></div></details></div></details>","FromParallelIterator<(A, B)>","polars::frame::group_by::IdxItem","polars::frame::group_by::BorrowIdxItem","polars::prelude::LeftJoinIds","polars::prelude::InnerJoinIds"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromParallelIterator%3CEither%3CL,+R%3E%3E-for-(A,+B)\" class=\"impl\"><a href=\"#impl-FromParallelIterator%3CEither%3CL,+R%3E%3E-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, R, A, B&gt; FromParallelIterator&lt;<a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a><div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + FromParallelIterator&lt;L&gt;,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + FromParallelIterator&lt;R&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_par_iter\" class=\"method trait-impl\"><a href=\"#method.from_par_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">from_par_iter</a>&lt;I&gt;(pi: I) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a><div class=\"where\">where\n    I: IntoParallelIterator&lt;Item = <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;&gt;,</div></h4></section></summary><div class='docblock'>Creates an instance of the collection from the parallel iterator <code>par_iter</code>. <a>Read more</a></div></details></div></details>","FromParallelIterator<Either<L, R>>","polars::frame::group_by::IdxItem","polars::frame::group_by::BorrowIdxItem","polars::prelude::LeftJoinIds","polars::prelude::InnerJoinIds"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IntoParallelIterator-for-(A,+B)\" class=\"impl\"><a href=\"#impl-IntoParallelIterator-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B&gt; IntoParallelIterator for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a><div class=\"where\">where\n    A: IntoParallelIterator,\n    &lt;A as IntoParallelIterator&gt;::Iter: IndexedParallelIterator,\n    B: IntoParallelIterator,\n    &lt;B as IntoParallelIterator&gt;::Iter: IndexedParallelIterator,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Item\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Item\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Item</a> = (&lt;A as IntoParallelIterator&gt;::Item, &lt;B as IntoParallelIterator&gt;::Item)</h4></section></summary><div class='docblock'>The type of item that the parallel iterator will produce.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Iter\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Iter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Iter</a> = MultiZip&lt;(&lt;A as IntoParallelIterator&gt;::Iter, &lt;B as IntoParallelIterator&gt;::Iter)&gt;</h4></section></summary><div class='docblock'>The parallel iterator type that will be created.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_par_iter\" class=\"method trait-impl\"><a href=\"#method.into_par_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">into_par_iter</a>(self) -&gt; &lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a> as IntoParallelIterator&gt;::Iter</h4></section></summary><div class='docblock'>Converts <code>self</code> into a parallel iterator. <a>Read more</a></div></details></div></details>","IntoParallelIterator","polars::frame::group_by::IdxItem","polars::frame::group_by::BorrowIdxItem","polars::prelude::LeftJoinIds","polars::prelude::InnerJoinIds"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ParallelExtend%3C(A,+B)%3E-for-(FromA,+FromB)\" class=\"impl\"><a href=\"#impl-ParallelExtend%3C(A,+B)%3E-for-(FromA,+FromB)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B, FromA, FromB&gt; ParallelExtend&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(FromA, FromB)</a><div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    FromA: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + ParallelExtend&lt;A&gt;,\n    FromB: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + ParallelExtend&lt;B&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.par_extend\" class=\"method trait-impl\"><a href=\"#method.par_extend\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">par_extend</a>&lt;I&gt;(&amp;mut self, pi: I)<div class=\"where\">where\n    I: IntoParallelIterator&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a>&gt;,</div></h4></section></summary><div class='docblock'>Extends an instance of the collection with the elements drawn\nfrom the parallel iterator <code>par_iter</code>. <a>Read more</a></div></details></div></details>","ParallelExtend<(A, B)>","polars::frame::group_by::IdxItem","polars::frame::group_by::BorrowIdxItem","polars::prelude::LeftJoinIds","polars::prelude::InnerJoinIds"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ParallelExtend%3CEither%3CL,+R%3E%3E-for-(A,+B)\" class=\"impl\"><a href=\"#impl-ParallelExtend%3CEither%3CL,+R%3E%3E-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;L, R, A, B&gt; ParallelExtend&lt;<a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a><div class=\"where\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + ParallelExtend&lt;L&gt;,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + ParallelExtend&lt;R&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.par_extend\" class=\"method trait-impl\"><a href=\"#method.par_extend\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">par_extend</a>&lt;I&gt;(&amp;mut self, pi: I)<div class=\"where\">where\n    I: IntoParallelIterator&lt;Item = <a class=\"enum\" href=\"https://docs.rs/either/1/either/enum.Either.html\" title=\"enum either::Either\">Either</a>&lt;L, R&gt;&gt;,</div></h4></section></summary><div class='docblock'>Extends an instance of the collection with the elements drawn\nfrom the parallel iterator <code>par_iter</code>. <a>Read more</a></div></details></div></details>","ParallelExtend<Either<L, R>>","polars::frame::group_by::IdxItem","polars::frame::group_by::BorrowIdxItem","polars::prelude::LeftJoinIds","polars::prelude::InnerJoinIds"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-(T0,+T1)\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/serde/1.0.215/src/serde/ser/impls.rs.html#428-444\">Source</a><a href=\"#impl-Serialize-for-(T0,+T1)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T0, T1&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T0, T1)</a><div class=\"where\">where\n    T0: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,\n    T1: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/serde/1.0.215/src/serde/ser/impls.rs.html#428-444\">Source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(\n    &amp;self,\n    serializer: S,\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.215/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","polars::frame::group_by::IdxItem","polars::frame::group_by::BorrowIdxItem","polars::prelude::LeftJoinIds","polars::prelude::InnerJoinIds"]]],["polars_core",[]],["polars_ops",[]]]);
    if (window.register_type_impls) {
        window.register_type_impls(type_impls);
    } else {
        window.pending_type_impls = type_impls;
    }
})()
//{"start":55,"fragment_lengths":[18840,19,18]}