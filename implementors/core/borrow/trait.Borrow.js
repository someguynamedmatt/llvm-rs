(function() {var implementors = {};
implementors["libc"] = [];implementors["cbox"] = ["impl&lt;'a,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;D&gt; for <a class='struct' href='cbox/struct.CSemiBox.html' title='cbox::CSemiBox'>CSemiBox</a>&lt;'a,&nbsp;D&gt; <span class='where'>where D: <a class='trait' href='cbox/trait.DisposeRef.html' title='cbox::DisposeRef'>DisposeRef</a> + 'a, <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.pointer.html'>*mut D::RefTo</a>: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.Into.html' title='core::convert::Into'>Into</a>&lt;&amp;'a D&gt;</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='cbox/struct.CBox.html' title='cbox::CBox'>CBox</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='cbox/trait.DisposeRef.html' title='cbox::DisposeRef'>DisposeRef</a></span>",];implementors["llvm"] = ["impl&lt;'a,&nbsp;D&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;D&gt; for <a class='struct' href='llvm/struct.CSemiBox.html' title='llvm::CSemiBox'>CSemiBox</a>&lt;'a,&nbsp;D&gt; <span class='where'>where D: <a class='trait' href='cbox/trait.DisposeRef.html' title='cbox::DisposeRef'>DisposeRef</a> + 'a, <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.pointer.html'>*mut </a>D::<a class='trait' href='cbox/trait.DisposeRef.html' title='cbox::DisposeRef'>RefTo</a>: <a class='trait' href='https://doc.rust-lang.org/nightly/core/convert/trait.Into.html' title='core::convert::Into'>Into</a>&lt;&amp;'a D&gt;</span>","impl&lt;T&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/borrow/trait.Borrow.html' title='core::borrow::Borrow'>Borrow</a>&lt;T&gt; for <a class='struct' href='llvm/struct.CBox.html' title='llvm::CBox'>CBox</a>&lt;T&gt; <span class='where'>where T: <a class='trait' href='cbox/trait.DisposeRef.html' title='cbox::DisposeRef'>DisposeRef</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
