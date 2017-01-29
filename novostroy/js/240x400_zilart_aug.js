(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 240,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];


lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#016C64").s().p("AgIgLIAQAAIgMAYg");
	this.shape.setTransform(0,0,1.027,1.027);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1.3,1.9,2.7);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#016C64").s().p("AgIgLIAQAAIgMAYg");
	this.shape.setTransform(0,0,1.027,1.027);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-1.3,1.9,2.7);


(lib.Symbolas1ss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5ABBED").s().p("ADpMNQjtiljGjVQjIjUiVj4QiOjthbkFQhbkKgkkYIARgBQEpAAEYBeQDUBJC4B3QF/D2DdGMQDlGWAAHXQAADLgtDFQlRh3kpjLg");
	this.shape.setTransform(93.7,113.4,1.027,1.027);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.4,226.8);


(lib.Symbol62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#47A7E1").s().p("AmzB4QC2nxF5l6QDQjQD6iYQgoCRg/CFIAAAAIweegQgkoBCwnig");
	this.shape.setTransform(34.3,26,1.022,1.022);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB3F67").s().p("AsFN4QgalVBGlOQCSq9H+n+QFvlxHni3IAAAtQAAD1hBDsQj6CXjQDQQl5F7i2HxQiwHiAkIBIi6FZQh4lAgalXg");
	this.shape_1.setTransform(20.6,16.7,1.022,1.022);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE239").s().p("AvmJzQgWlcBLlSQBNlYCqk0QCOjZBch1QBZhuC/jKIABgBQDtjXEbiRQEViOExhDQBPD4AGEFQnyC8l5F5QoHIJiVLMQhHFWAbFcQAaFeB6FIIhfCwQmopEgsrRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-192.8,201,385.8);


(lib.Symbol61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#47A7E1").s().p("AuKAhQDLh1Dig+QDnhAD0AAQDzAADrBBQDjA/DMB2QmwCvnWAAQnZAAm2iyg");
	this.shape.setTransform(0.1,-50.9,1.022,1.022);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EB3F67").s().p("AqdDkQk/hdkbivQCkilDKh2QG1CyHZAAQHWAAGwiuQDLB4CiCmQkYCsk9BbQlGBelYAAQlYAAlKhgg");
	this.shape_1.setTransform(0,-14.4,1.022,1.022);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFE239").s().p("Aj+HRQhZgFiQgXQkzg/kZiJQkUiHjqjGQB2jNCpioQEhC1FGBfQFRBiFgAAQFfAAFOhgQFDhdEfiyQCoCrB1DOQjsDEkUCFQkaCHkzA9QiHAUh6AGQhZAEimAAQibAAhIgFg");
	this.shape_2.setTransform(0,28.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.7,-72.5,317.4,148.1);


(lib.Symbol60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#019278").s().p("A55jnQiplmgDmPIAAgSQAAkzBikfQA5imBbifQB3jNCpioQCnioDOh5QDPh5DnhAQDthBD3AAQD7AADvBCQDoBBDQB7QDQB7CmCpQCoCrB2DOQBgCnA7C5QBOD4AHEGIAAAuQAAD6hDDyQgoCUhBCHIAAAAMgZ6Av9gAkO4RQh9A6hZBpQhKBWgnBpQgpBtAAB1QgBEJC8C7QC7C8EIAAQA8AABBgMQDegtCRivQCTixAAjnIAAgTQgDhvgohmQgnhkhGhSQhZhph9g8QiBg9iQAAQiOAAiAA8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-183.1,-283.8,366.2,567.8);


(lib.Symbol59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EB3F67").s().p("Ak9lmQiklfgEmGQCPBrB7B6QGLGOC0INQCuH+g8IZg");
	this.shape.setTransform(-20.6,12.5,1.022,1.022);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFE239").s().p("AENTHQA7oZiun/QiyoNmNmNQh6h6iPhsIgBgSQAAksBhkYQE+CoD/EAQEOEQCtFVQCnFIA9FsQA9FpgxFqQgyFuicFOg");
	this.shape_1.setTransform(0,0,1.022,1.022);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-161.1,140.6,322.3);


(lib.Symbol55copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292B2C").s().p("AhqCAIBpkHIBsAMIiJEDg");
	this.shape.setTransform(130.1,-7.8,0.209,0.209);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292B2C").s().p("AChFIIAAm1IlnG1IhaAAIAAqPICAAAIAAGzIFmmzIBbAAIAAKPg");
	this.shape_1.setTransform(120.4,-14.7,0.209,0.209);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292B2C").s().p("ABnFIIjnkmIgQAOIAAEYIiAAAIAAqPICAAAIAAEWIDwkWICiAAIkVEvIEkFgg");
	this.shape_2.setTransform(107.2,-14.7,0.209,0.209);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#292B2C").s().p("AjWFIIAAqPIC/AAQA7AAAjAJQAsALAhAeQAlAgARAwQANAlAAAqQAAAhgIAfQgNAyghAeQg6A7hqAAIhTAAIAADzgAhWgYIA0AAQAbABAMgDQAZgEASgOQARgOAKgVQAIgTAAgXQAAgxgkgaQgSgNgagFQgQgDgdAAIgsAAg");
	this.shape_3.setTransform(95.2,-14.7,0.209,0.209);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#292B2C").s().p("AC/FIIg6iKIkIAAIg6CKIiLAAIEbqPIBjAAIETKPgAhaBWIC5AAIhdjrg");
	this.shape_4.setTransform(82.4,-14.7,0.209,0.209);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#292B2C").s().p("ACEFIIAAohIkGAAIAAIhIiBAAIAAqPIIHAAIAAKPg");
	this.shape_5.setTransform(68.7,-14.7,0.209,0.209);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#292B2C").s().p("AC+FIIAAqPICBAAIAAKPgAk+FIIAAqPICBAAIAAEBIBmAAQBkAAA7A2QAdAYAPAkQARAnABAuQAABDgkAzQg3BRiBAAgAi9DaIBKAAQB1AAgBhZQABgmgVgXQgdgehBAAIhMAAg");
	this.shape_6.setTransform(124.6,5.2,0.209,0.209);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292B2C").s().p("ACKFIIAAklIkUAAIAAElIiAAAIAAqPICAAAIAAD+IEUAAIAAj+ICBAAIAAKPg");
	this.shape_7.setTransform(109.5,5.2,0.209,0.209);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#292B2C").s().p("AC+FIIg5iKIkIAAIg6CKIiKAAIEaqPIBiAAIEUKPgAhaBWIC5AAIhejrg");
	this.shape_8.setTransform(95.6,5.2,0.209,0.209);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#292B2C").s().p("Ag/FIIAAohIiTAAIAAhuIGlAAIAABuIiTAAIAAIhg");
	this.shape_9.setTransform(85.2,5.2,0.209,0.209);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#292B2C").s().p("ACKFIIAAklIkTAAIAAElIiBAAIAAqPICBAAIAAD+IETAAIAAj+ICBAAIAAKPg");
	this.shape_10.setTransform(73.7,5.2,0.209,0.209);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#292B2C").s().p("Aj7D2QhihgAAiWQAAiVBihgQBihhCZAAQCaAABiBhQBiBgABCVQgBCWhiBgQhiBhiaAAQiaAAhhhhgAicihQg+BAABBhQgBBjA+BAQA9BABfAAQBfAAA+hAQA9g/AAhkQAAhig9g/Qg+hBhfABQhfgBg9BBg");
	this.shape_11.setTransform(58.5,5.2,0.209,0.209);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#292B2C").s().p("Ag/FWIAAhcIgRAAQh0ABhFgyQgrgdgZgtQgfg6AAhKQAAhOAfg4QAZgtArgeQBFgyB0AAIARAAIAAhMIB+AAIAABMIASAAQB0AABGAyQAqAeAYAtQAgA4AABOQAABKggA6QgYAtgqAdQhGAyh0gBIgSAAIAABcgAA/CMIAVAAQAdAAASgEQAcgGAWgSQA0goAAhNQAAgpgPghQgNgegYgRQgngcg6AAIgVAAgAizh+Qg1ApAABQQAABMA1ApQAWASAbAGQARAEAfAAIATAAIAAkmIgTAAQg8AAglAcg");
	this.shape_12.setTransform(42,4.9,0.209,0.209);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#292B2C").s().p("AChFIIAAm1IlmG1IhbAAIAAqPICAAAIAAGzIFnmzIBaAAIAAKPg");
	this.shape_13.setTransform(21.4,5.2,0.209,0.209);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#292B2C").s().p("AjWFIIAAqPIC/AAQA7AAAjAJQArALAiAeQAlAgARAwQANAlAAAqQAAAhgIAfQgNAyghAeQg6A7hqAAIhTAAIAADzgAhWgYIA0AAQAaABANgDQAZgEASgOQARgOAJgVQAJgUAAgWQAAgxgkgaQgSgNgagFQgQgDgdAAIgsAAg");
	this.shape_14.setTransform(4.4,4.6,0.209,0.209);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#292B2C").s().p("AC/FIIg7iKIkHAAIg6CKIiLAAIEbqPIBjAAIETKPgAhaBWIC5AAIhejrg");
	this.shape_15.setTransform(-8.3,4.6,0.209,0.209);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#292B2C").s().p("AjcFIIAAqPICjAAQAtAAAbAFQA0AJAiAbQAdAWAQAlQAQAkAAApQAAA3geAmQgRAWgbAPQAzAHAjAgQAvAsAABPQAABTg4AyQg7A1hqAAgAhcDgIA3AAQA4AAAegSQAogXAAg1QAAg1gwgWQgSgIgYgDQgPgCgdABIgvAAgAhcg2IAlAAQAhAAAWgLQAqgVAAg2QAAgqgdgWQgYgSgrgBIgmAAg");
	this.shape_16.setTransform(-20.2,4.6,0.209,0.209);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#292B2C").s().p("AjhFIIAAqPICAAAIAAEBIBkAAQAuAAAiAJQAwAOAiAfQA9A2AABbQAABDgjA0QghAvg6AUQgoANg4AAgAhhDaIBLAAQB0AAAAhZQAAgmgXgXQgdgeg+AAIhNAAg");
	this.shape_17.setTransform(-31.3,4.6,0.209,0.209);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#292B2C").s().p("AkeFFIAAhuQASAFASABQAlAAAWgYQAXgXAGgrQAEgYAAg/IAAl2IG9AAIAAKPIiAAAIAAohIi9AAIAAEiQAABLgIAlQgPBDgwAnQgzArhQAAQgbAAgbgGg");
	this.shape_18.setTransform(-45,4.6,0.209,0.209);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#292B2C").s().p("AiRFIIBci3Ij0nYICWAAICkFJICNlJICMAAIkuKPg");
	this.shape_19.setTransform(-56.4,4.6,0.209,0.209);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#292B2C").s().p("AjcFIIAAqPIF6AAIAABuIj6AAIAACXIBZAAQBmAAA8A1QA+A2AABaQAABBgkA1QgiAvg6ATQgpANg2AAgAhcDaIA9AAQBDAAAegdQAXgVAAgkQAAgmgXgXQgfgchAAAIg/AAg");
	this.shape_20.setTransform(-66.9,4.6,0.209,0.209);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#292B2C").s().p("AhqB/IBpkGIBsAMIiJEDg");
	this.shape_21.setTransform(55.4,-8.4,0.209,0.209);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#292B2C").s().p("ABsFIIAAj+IgYAAIilD+IiaAAIDDkKQgogHgggWQghgYgTgkQgWgrAAg2QAAgzATgpQARgkAdgZQAigfAxgLQAhgIAzAAIC+AAIAAKPgAAAjSQg2AYAAA+QAABjB9AAIAlAAIAAjGIgoAAQgqAAgaANg");
	this.shape_22.setTransform(46.8,-15.2,0.209,0.209);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#292B2C").s().p("AC/FIIg7iKIkHAAIg6CKIiLAAIEbqPIBjAAIETKPgAhaBWIC5AAIhejrg");
	this.shape_23.setTransform(34.9,-15.2,0.209,0.209);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#292B2C").s().p("ACKFIIAAklIkUAAIAAElIiAAAIAAqPICAAAIAAD+IEUAAIAAj+ICAAAIAAKPg");
	this.shape_24.setTransform(21.1,-15.2,0.209,0.209);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#292B2C").s().p("AEeFIIjTkmIgOAOIAAEYIh5AAIAAkYIgOgOIjTEmIiUAAIEElgIj7kvICSAAIDaEVIAAkVIB5AAIAAEVIDakVICSAAIj7EvIEEFgg");
	this.shape_25.setTransform(4.9,-15.2,0.209,0.209);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#292B2C").s().p("Ai1FIIAAqPIFrAAIAABuIjrAAIAACTIDhAAIAABsIjhAAIAACzIDrAAIAABvg");
	this.shape_26.setTransform(-8.9,-15.2,0.209,0.209);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#292B2C").s().p("AjWFIIAAqPIC/AAQA7AAAkAJQArALAhAeQAlAgARAwQAOAlAAAqQAAAhgJAfQgNAyghAeQg6A6hrAAIhSAAIAAD0gAhWgYIA0AAQAaABAMgDQAZgEATgOQARgOAJgVQAKgUgBgXQAAgvgkgbQgSgNgagFQgRgDgcAAIgsAAg");
	this.shape_27.setTransform(-19,-15.2,0.209,0.209);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#292B2C").s().p("Ai1FIIAAqPIFrAAIAABuIjrAAIAACTIDhAAIAABsIjhAAIAACzIDrAAIAABvg");
	this.shape_28.setTransform(-29.7,-15.2,0.209,0.209);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#292B2C").s().p("AjcFIIAAqPIF6AAIAABuIj6AAIAACXIBYAAQBnAAA8A1QAdAYAQAkQARAnAAAtQAABBgkA1QgiAvg6ASQgpAOg3AAgAhcDZIA9AAQBDABAegdQAXgVAAgkQAAgmgYgXQgegchAAAIg/AAg");
	this.shape_29.setTransform(-40.4,-15.2,0.209,0.209);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#292B2C").s().p("AC/FIIg7iKIkHAAIg6CKIiLAAIEbqPIBjAAIETKPgAhaBWIC5AAIhejrg");
	this.shape_30.setTransform(-53.3,-15.2,0.209,0.209);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#292B2C").s().p("ACLFIIAAklIkUAAIAAElIiBAAIAAqPICBAAIAAD+IEUAAIAAj+ICAAAIAAKPg");
	this.shape_31.setTransform(-67.1,-15.2,0.209,0.209);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.7,-22.1,205.1,34.5);


(lib.Symbol55copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A2C2F").s().p("AgQFSIismbIhDGSIiCAAIB6qaIBZAAICvGrIC6mrIBZAAIBuKaIiCAAIg7mSIi0Gbg");
	this.shape.setTransform(92.6,33.3,0.24,0.24);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A2C2F").s().p("ABmFHIjnkmIgOAPIAAEXIiAAAIAAqOICAAAIAAEWIDvkWIChAAIkTEwIEiFeg");
	this.shape_1.setTransform(75.9,33.3,0.24,0.24);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A2C2F").s().p("AimEeQg9g2AAhUQAAg5AggsQAfgsA2gQQgogUgZgiQgdgoAAgzQAAhNAzgzQA5g3BgAAQBhAAA5A3QAzAzAABNQAAAzgdAoQgYAigpAUQA2AQAfAsQAgAsAAA5QAABUg+A2Qg/A4hnAAQhmAAhAg4gAhGBCQgdAdAAAsQAAAtAdAdQAcAdAqAAQArAAAcgdQAdgdAAgtQAAgsgdgdQgcgdgrAAQgqAAgcAdgAhBjfQgZAZAAApQAAAoAZAaQAaAZAnAAQAoAAAagZQAZgaAAgoQAAgpgZgZQgagagoAAQgnAAgaAag");
	this.shape_2.setTransform(55.9,33.3,0.24,0.24);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A2C2F").s().p("AhqB/IBokGIBtAMIiJEDg");
	this.shape_3.setTransform(45.9,41.2,0.24,0.24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A2C2F").s().p("AieEgQhEg5gHhdICAAAQAFAqAcAZQAeAbArAAQA0AAAdghQAZgdAAgqQAAgqgZgcQgdghg1AAIgRAAIAAhaIARAAQArAAAYgcQAVgYAAglQAAgogXgXQgZgYgnAAQgiAAgZAWQgbAXgCApIh4AAQAJhXA8gzQA6gwBUAAQBeAAA5AxQA3AxAABTQAABfhMAqQAkAPAYAZQApAtAABGQAABihFA5QhBA3hkAAQheAAhBg2g");
	this.shape_4.setTransform(37.8,33.3,0.24,0.24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A2C2F").s().p("AkgG3IAAqbICAAAIAAG2IFonFIBYAAIAAKdIh/AAIAAm5IloHGgAhvlCQgtgdgTgzIBYgkQANAkAjAOQATAIAUAAQAWAAATgIQAigOANgkIBZAkQgUAzgsAdQgvAehCAAQhBAAgugeg");
	this.shape_5.setTransform(17.8,30.9,0.24,0.24);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A2C2F").s().p("Aj7D2QhhhggBiWQABiUBhhhQBihgCZAAQCaAABiBgQBhBhAACUQAACWhhBgQhiBgiaAAQiZAAhihggAibihQg+A/AABiQAABjA+BAQA8A/BfAAQBfAAA+g/QA8hAABhjQgBhig8g/Qg+hAhfAAQhfAAg8BAg");
	this.shape_6.setTransform(-0.2,33.3,0.24,0.24);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A2C2F").s().p("ACKFHIAAkjIkTAAIAAEjIiAAAIAAqOICAAAIAAD+IETAAIAAj+ICAAAIAAKOg");
	this.shape_7.setTransform(-17.6,33.3,0.24,0.24);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A2C2F").s().p("AkgFVIAAqbICBAAIAAG3IFnnFIBZAAIAAKcIiAAAIAAm4IloHFg");
	this.shape_8.setTransform(-34.3,33.3,0.24,0.24);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A2C2F").s().p("AkeFEIAAhtQAUAFARABQAjAAAYgYQAWgXAHgrQADgYAAg+IAAl3IG9AAIAAKOIiAAAIAAofIi9AAIAAEhQAABLgIAkQgPBDgwAnQgyAshQAAQgcAAgbgHg");
	this.shape_9.setTransform(-51.5,33.4,0.24,0.24);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A2C2F").s().p("ADJGRIAAiTImRAAIAACTIh2AAIAAkBQAiABAdgaQAagYAPgoQAYg4AAhyIAAkdIG4AAIAAIgIBFAAIAAEBgAhChzQAAB4gXA9QgRAugiAgIEGAAIAAmyIi8AAg");
	this.shape_10.setTransform(-66.4,35.1,0.24,0.24);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A2C2F").s().p("ABsFIIAAj+IgYAAIilD+IiZAAIDCkKQgogHgggWQgggYgUgkQgVgrgBg2QAAgyAUgqQAQgjAdgZQAjgfAwgLQAigIAyAAIC+AAIAAKOgAgBjRQg1AXAAA+QAABjB8AAIAmAAIAAjFIgoAAQgqAAgbANg");
	this.shape_11.setTransform(64.8,10.5,0.24,0.24);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A2C2F").s().p("AC+FOIg6iJIkHAAIg6CJIiKAAIEcqbIBfAAIEUKbgAhaBcIC5AAIhdjqg");
	this.shape_12.setTransform(51.1,10.3,0.24,0.24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A2C2F").s().p("ACKFIIAAklIkTAAIAAElIiAAAIAAqOICAAAIAAD+IETAAIAAj+ICAAAIAAKOg");
	this.shape_13.setTransform(35.2,10.5,0.24,0.24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A2C2F").s().p("AEdFIIjSkmIgPAPIAAEXIh3AAIAAkXIgQgPIjREmIiUAAIEDlgIj7kuICSAAIDbEVIAAkVIB3AAIAAEVIDakVICSAAIj6EuIEDFgg");
	this.shape_14.setTransform(16.7,10.5,0.24,0.24);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A2C2F").s().p("Ai0FIIAAqOIFpAAIAABuIjqAAIAACSIDgAAIAABsIjgAAIAACzIDqAAIAABvg");
	this.shape_15.setTransform(0.8,10.5,0.24,0.24);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A2C2F").s().p("AjWFIIAAqOIC/AAQA6AAAkAJQArALAiAeQAlAgAQAvQAOAlAAAqQAABdg2AzQg6A6hqABIhTAAIAADzgAhWgYIA0AAQAbAAAMgCQAZgFASgNQARgOAJgVQAJgUAAgWQAAgxgkgaQgSgMgagFQgQgDgdAAIgsAAg");
	this.shape_16.setTransform(-10.8,10.5,0.24,0.24);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A2C2F").s().p("Ai1FIIAAqOIFrAAIAABuIjqAAIAACSIDgAAIAABsIjgAAIAACzIDqAAIAABvg");
	this.shape_17.setTransform(-23.1,10.5,0.24,0.24);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A2C2F").s().p("AjcFIIAAqOIF6AAIAABuIj6AAIAACWIBZAAQBmAAA8A2QAdAXAQAkQARAnAAAtQAABBglA0QghAvg6ATQgpAOg2AAgAhcDZIA9AAQBDAAAfgdQAWgVAAgjQAAglgXgYQgfgchAAAIg/AAg");
	this.shape_18.setTransform(-35.4,10.5,0.24,0.24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2A2C2F").s().p("AC+FOIg6iJIkGAAIg6CJIiLAAIEcqbIBfAAIEUKbgAhaBcIC5AAIhcjqg");
	this.shape_19.setTransform(-50.2,10.3,0.24,0.24);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#2A2C2F").s().p("ACLFIIAAklIkUAAIAAElIiAAAIAAqOICAAAIAAD+IEUAAIAAj+IB/AAIAAKOg");
	this.shape_20.setTransform(-66.1,10.5,0.24,0.24);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#2A2C2F").s().p("ABrFHIAAj9IgXAAIilD9IiZAAIDCkJQgogGgggYQgggXgTgkQgXgrAAg2QAAgyAUgqQAQgiAdgaQAjgeAwgNQAigIAxAAIC+AAIAAKOgAgBjSQg1AYAAA+QAABjB8ABIAlAAIAAjGIgnAAQgqAAgbAMg");
	this.shape_21.setTransform(74.6,-12.4,0.24,0.24);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#2A2C2F").s().p("AC+FOIg6iJIkGAAIg7CJIiKAAIEcqbIBeAAIEVKbgAhaBcIC5AAIhcjqg");
	this.shape_22.setTransform(60.9,-12.5,0.24,0.24);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#2A2C2F").s().p("ACKFHIAAkjIkTAAIAAEjIiAAAIAAqOICAAAIAAD+IETAAIAAj+ICAAAIAAKOg");
	this.shape_23.setTransform(45,-12.4,0.24,0.24);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#2A2C2F").s().p("ACKFHIAAkjIkTAAIAAEjIiAAAIAAqOICAAAIAAD+IETAAIAAj+ICAAAIAAKOg");
	this.shape_24.setTransform(28.8,-12.4,0.24,0.24);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#2A2C2F").s().p("Ai0FHIAAqOIFpAAIAABvIjqAAIAACTIDgAAIAABsIjgAAIAACzIDqAAIAABtg");
	this.shape_25.setTransform(15.3,-12.4,0.24,0.24);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#2A2C2F").s().p("AjcFHIAAqOICiAAQAtAAAbAGQA0AJAjAbQAcAWARAkQAQAkAAAqQAAA2geAmQgSAWgaAOQAzAJAiAfQAwAtAABNQAAAjgLAgQgPAngeAbQg9A1hoAAgAhcDfIA3AAQA3ABAegTQApgYAAgzQAAg0gwgXQgSgIgYgDQgPgCgdAAIgvAAgAhcg2IAkAAQAiAAAWgMQAqgUAAg1QAAgqgegWQgYgTgrAAIglAAg");
	this.shape_26.setTransform(3,-12.4,0.24,0.24);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#2A2C2F").s().p("Ag/FHIAAofIiTAAIAAhvIGlAAIAABvIiUAAIAAIfg");
	this.shape_27.setTransform(-9.1,-12.4,0.24,0.24);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2A2C2F").s().p("AgxE8Qg0gWgugrQg3g2gag/QgYg8AAhKQAAhSAfhGQAbg8AvgrQBchWCTAAQBWAABLAoIAACVQgmgsg3gSQghgLggAAQhfAAg9BFQg7BCAABcQAABnBGA/QA9A6BZAAQAtAAAogTQAngTAdgiIAACWQhKAmhYAAQhRAAg7gag");
	this.shape_28.setTransform(-21.2,-12.4,0.24,0.24);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A2C2F").s().p("AjcFHIAAqOIF6AAIAABvIj6AAIAACWIBZAAQBmAAA8A1QAdAYAQAlQARAmAAAtQAABAglA1QghAvg6ATQgpANg3AAgAhcDaIA9AAQBDAAAegdQAXgWAAgjQAAgmgYgWQgegehAAAIg/AAg");
	this.shape_29.setTransform(-34.5,-12.4,0.24,0.24);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2A2C2F").s().p("Aj7D2QhihgAAiWQAAiUBihhQBihgCZAAQCaAABiBgQBiBhAACUQAACWhiBgQhiBgiaAAQiZAAhihggAibihQg+A/AABiQAABjA+BAQA9A/BeAAQBgAAA9g/QA9hAAAhjQAAhig9g/Qg+hAhfAAQheAAg9BAg");
	this.shape_30.setTransform(-50.8,-12.4,0.24,0.24);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2A2C2F").s().p("AgxE8Qg0gWgugrQg3g2gag/QgYg8AAhKQAAhSAghGQAbg7AugsQBchWCTAAQBWAABLAoIAACVQgmgsg2gSQghgLghAAQhfAAg9BFQg7BCAABcQAABnBGA/QA9A6BZAAQAtAAAogTQAngTAdgiIAACWQhKAmhYAAQhQAAg8gag");
	this.shape_31.setTransform(-67.1,-12.4,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74,-20.6,176,65.4);


(lib.Symbol55copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash1.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292B2C").s().p("AkyFsIAArHICIAAIAAHUIF/nkIBeAAIAALJIiHAAIAAnWImBHkg");
	this.shape.setTransform(70.2,11.1,0.244,0.244);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292B2C").s().p("AkzFsIAArHICJAAIAAHUIF/nkIBfAAIAALJIiJAAIAAnWIl/Hkg");
	this.shape_1.setTransform(51.5,11.1,0.244,0.244);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292B2C").s().p("AjkFdIAAq5IDLAAQA/AAAmAKQAuALAkAgQAnAiASAzQAOAnAAAtQAAAjgIAhQgPA1gjAhQg9A+hxAAIhYAAIAAEDgAhbgaIA3AAQAcAAANgCQAbgFATgOQASgPAKgWQAJgWAAgXQABgzgngdQgTgOgbgEQgSgEgfAAIguAAg");
	this.shape_2.setTransform(36.2,11.1,0.244,0.244);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#292B2C").s().p("AkMEGQhohmAAigQAAieBohnQBphnCjAAQCkAABpBnQBoBnAACeQAACghoBmQhpBnikAAQijAAhphngAimisQhBBEAABoQAABqBBBEQBBBDBlAAQBmAABBhDQBBhEAAhqQAAhohBhEQhBhEhmAAQhlAAhBBEg");
	this.shape_3.setTransform(18.7,11.1,0.244,0.244);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#292B2C").s().p("AhCFdIAApEIieAAIAAh1IHBAAIAAB1IidAAIAAJEg");
	this.shape_4.setTransform(3.1,11.1,0.244,0.244);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#292B2C").s().p("AkzFsIAArHICIAAIAAHUIGAnkIBfAAIAALJIiIAAIAAnWImAHkg");
	this.shape_5.setTransform(-11.8,11.1,0.244,0.244);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#292B2C").s().p("AjkFdIAAq5IDMAAQA+AAAmAKQAuALAkAgQAmAiATAzQAOAnAAAtQAAAjgJAhQgOA1giAhQg+A+hyAAIhYAAIAAEDgAhcgaIA4AAQAcAAANgCQAbgFATgOQASgPALgWQAJgWAAgXQAAgygngeQgTgOgcgEQgRgEgeAAIgwAAg");
	this.shape_6.setTransform(-27.1,11.1,0.244,0.244);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292B2C").s().p("AjkFdIAAq5IDMAAQA+AAAmAKQAuALAkAgQAmAiATAzQAOAnAAAtQAAAjgJAhQgOA1giAhQg/A+hxAAIhYAAIAAEDgAhcgaIA4AAQAcAAANgCQAbgFATgOQASgPAKgWQAKgWAAgXQAAgzgngdQgTgOgcgEQgRgEgeAAIgwAAg");
	this.shape_7.setTransform(-40.5,11.1,0.244,0.244);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#292B2C").s().p("AjAFdIAAq5IGBAAIAAB1Ij5AAIAACdIDvAAIAABzIjvAAIAAC+ID5AAIAAB2g");
	this.shape_8.setTransform(-53.8,11.1,0.244,0.244);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#292B2C").s().p("AhDFdIAApEIidAAIAAh1IHBAAIAAB1IieAAIAAJEg");
	this.shape_9.setTransform(-65.9,11.1,0.244,0.244);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#292B2C").s().p("AkyHTIAArGICHAAIAAHTIGAnjIBeAAIAALJIiIAAIAAnWImAHjgAh3lXQgvgfgWg3IBfglQAOAlAkAPQAVAIAWAAQAXAAAUgIQAlgPAOglIBeAlQgUA3gwAfQgyAghGAAQhFAAgyggg");
	this.shape_10.setTransform(121.9,-16.1,0.244,0.244);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#292B2C").s().p("AkMEGQhohmABigQgBieBohnQBphnCjABQCkgBBpBnQBoBnAACeQAACghoBmQhpBmikABQijgBhphmgAimisQhCBEAABoQAABqBCBDQBBBEBlAAQBmAABBhEQBBhDAAhqQAAhohBhEQhBhEhmAAQhlAAhBBEg");
	this.shape_11.setTransform(102.5,-13.5,0.244,0.244);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#292B2C").s().p("AjqFdIAAq5ICtAAQAwAAAcAGQA4AKAkAcQAfAXARAnQARAmAAAsQAAA7ggAoQgSAYgcAPQA3AJAkAhQAyAwAABTQAABYg7A2QhBA4hvAAgAhiDuIA7AAQA7AAAggTQArgZAAg3QAAg6gzgWQgUgJgZgEQgQgBgfAAIgyAAgAhig5IAnAAQAjAAAYgNQAtgWAAg5QAAgtgggXQgagUgtAAIgoAAg");
	this.shape_12.setTransform(85.6,-13.5,0.244,0.244);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#292B2C").s().p("AkLEGQhphmAAigQAAieBphnQBohnCjABQCkgBBpBnQBnBnAACeQAACghnBmQhpBmikABQijgBhohmgAimisQhBBEAABoQAABqBBBDQBBBEBlAAQBmAABBhEQBBhDAAhqQAAhohBhEQhBhEhmAAQhlAAhBBEg");
	this.shape_13.setTransform(67.9,-13.5,0.244,0.244);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#292B2C").s().p("ABuFdIj3k6IgQARIAAEpIiIAAIAAq5ICIAAIAAEnID/knICsAAIklFDIE1F2g");
	this.shape_14.setTransform(50.7,-13.5,0.244,0.244);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#292B2C").s().p("AjkFdIAAq5IDLAAQA+AAAmAKQAuAMAkAfQAnAjATAyQAOAoAAAsQAAAjgJAiQgOA1gjAgQg+A+hxAAIhYAAIAAEDgAhcgZIA4AAQAcAAANgCQAbgFASgPQATgOAKgXQAKgVAAgYQAAgzgogcQgSgOgcgFQgSgEgeAAIgvAAg");
	this.shape_15.setTransform(35.8,-13.5,0.244,0.244);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#292B2C").s().p("ADLFkIg+iSIkYAAIg+CSIiTAAIEurHIBlAAIEmLHgAhgBiIDFAAIhij5g");
	this.shape_16.setTransform(19.9,-13.7,0.244,0.244);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#292B2C").s().p("ACMFdIAApEIkXAAIAAJEIiIAAIAAq5IInAAIAAK5g");
	this.shape_17.setTransform(2.9,-13.5,0.244,0.244);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#292B2C").s().p("ADKFkIg9iSIkYAAIg+CSIiTAAIEurHIBlAAIEnLHgAhgBiIDFAAIhjj5g");
	this.shape_18.setTransform(-19.8,-13.7,0.244,0.244);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#292B2C").s().p("Ai4FdIAAq5IFxAAIAAB1IjpAAIAAJEg");
	this.shape_19.setTransform(-30.8,-13.5,0.244,0.244);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#292B2C").s().p("AkCEkIE5oZIlDAAIAAh2IIZAAImoLXg");
	this.shape_20.setTransform(-49.5,-13.2,0.244,0.244);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#292B2C").s().p("Aj8FlIDNjqIA1hAQAxg6AQgWQApg8AAg0QAAgugegeQgdgegtAAQgxAAgfAkQgcAhgBAwIiNAAQAFhqBFhAQBDhABnAAQBzAABFBGQA+A+AABaQAABHgrBEQgZAog7A/Ih4CDID8AAIAAB2g");
	this.shape_21.setTransform(-64.9,-13.7,0.244,0.244);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.4,-27.5,200.8,47.6);


(lib.Symbol55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292B2C").s().p("ADLFdIAAq5ICIAAIAAK5gAlSFdIAAq5ICIAAIAAESIBtAAQAwAAAlAKQAxANAkAiQAfAaAQAmQASApAAAxQAABHgmA3Qg6BWiKAAgAjKDoIBQAAQB8AAAAhfQAAgogXgZQgfgfhEAAIhSAAg");
	this.shape.setTransform(35.8,11.8,0.252,0.252);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292B2C").s().p("AjkFdIAAq5IDLAAQA/AAAmAJQAtAMAkAgQAnAiASAzQAPAoAAAsQAAAjgJAhQgOA1gjAhQg9A+hyAAIhYAAIAAEDgAhcgaIA3AAQAdABANgDQAagFATgOQATgPAKgWQAJgVAAgYQAAgzgmgdQgTgOgcgEQgRgEgfAAIgvAAg");
	this.shape_1.setTransform(19.2,11.8,0.252,0.252);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292B2C").s().p("AjqFdIAAq5ICtAAQAwAAAcAGQA4AKAkAcQAfAXARAnQARAmAAAsQAAA7ggAoQgSAXgcAPQA1AKAmAgQAyAxAABTQAAAkgLAiQgQAqggAdQglAggxAOQgnALgzAAgAhiDuIA7AAQA7gBAggSQArgaAAg3QAAg5g0gWQgTgJgZgEQgQgBgfAAIgyAAgAhig6IAnAAQAkAAAXgMQAtgWAAg5QAAgtgggXQgagUgtAAIgoAAg");
	this.shape_2.setTransform(4.6,11.8,0.252,0.252);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#292B2C").s().p("AjBFdIAAq5IGCAAIAAB1Ij5AAIAACdIDvAAIAABzIjvAAIAAC/ID5AAIAAB1g");
	this.shape_3.setTransform(-9.3,11.8,0.252,0.252);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#292B2C").s().p("ADWGsIAAieImrAAIAACeIh+AAIAAkTQAkABAfgcQAbgZARgqQAZg/AAh3IAAkvIHVAAIAAJDIBKAAIAAETgAhHh7QAACBgYBAQgSAwgkAjIEYAAIAAnOIjKAAg");
	this.shape_4.setTransform(-24.8,13.8,0.252,0.252);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#292B2C").s().p("AjAFdIAAq5IGCAAIAAB1Ij6AAIAACdIDvAAIAABzIjvAAIAAC/ID6AAIAAB1g");
	this.shape_5.setTransform(-39.5,11.8,0.252,0.252);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#292B2C").s().p("AmrFdIAAq5ICIAAIAAJEIDgAAIAApEICHAAIAAJEIDgAAIAApEICIAAIAAK5g");
	this.shape_6.setTransform(-59,11.8,0.252,0.252);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#292B2C").s().p("AltA2IAAhrILbAAIAABrg");
	this.shape_7.setTransform(72.3,-10.9,0.252,0.252);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#292B2C").s().p("ADLFkIg+iSIkYAAIg+CSIiUAAIEvrHIBlAAIEmLHgAhgBiIDFAAIhjj5g");
	this.shape_8.setTransform(47.3,-13.8,0.252,0.252);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#292B2C").s().p("AgRFoIi4m2IhHGsIiKAAICCrFIBeAAIC8HHIDGnHIBeAAIB1LFIiKAAIg/msIjAG2g");
	this.shape_9.setTransform(27.2,-13.7,0.252,0.252);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#292B2C").s().p("AkMEGQhohmAAigQAAieBohmQBphoCjAAQCkAABpBoQBnBmAACeQAACghnBmQhpBmikAAQijAAhphmgAimisQhBBEAABoQAABqBBBDQBBBEBlAAQBmAABBhEQBChDAAhqQAAhohChEQhBhEhmAAQhlAAhBBEg");
	this.shape_10.setTransform(5.4,-13.6,0.252,0.252);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#292B2C").s().p("ADWGsIAAieImsAAIAACeIh9AAIAAkTQAjABAggcQAbgZARgqQAZg/AAh3IAAkvIHWAAIAAJDIBJAAIAAETgAhHh7QAACBgYBBQgTAxgkAhIEZAAIAAnOIjKAAg");
	this.shape_11.setTransform(-13.7,-11.6,0.252,0.252);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#292B2C").s().p("AjAFdIAAq5IGBAAIAAB1Ij5AAIAACcIDvAAIAAB0IjvAAIAAC/ID5AAIAAB1g");
	this.shape_12.setTransform(-34.4,-13.6,0.252,0.252);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#292B2C").s().p("Ag1FRQg3gYgxgtQg7g6gbhDQgahAAAhPQAAhXAihKQAdhBAxgtQBihdCdAAQBdAABPArIAACgQgqgwg5gUQgjgLgjAAQhlAAhBBJQg/BHAABiQAABuBKBEQBCA9BeAAQAxAAAqgUQAqgUAfglIAACgQhOAohfAAQhWAAhAgbg");
	this.shape_13.setTransform(-49,-13.6,0.252,0.252);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#292B2C").s().p("AjqFdIAAq5ICtAAQAwAAAcAGQA4AJAlAdQAeAXARAnQARAnAAArQAAA7ggAoQgSAYgcAPQA2AJAlAhQAyAwAABTQAABYg7A1QhBA5hvAAgAhiDuIA7AAQA7AAAggTQArgaAAg3QAAg5gzgXQgUgIgZgEQgQgBgfAAIgyAAgAhig6IAnAAQAjAAAYgMQAtgWAAg5QAAgtgggXQgagUgtAAIgoAAg");
	this.shape_14.setTransform(-63.8,-13.6,0.252,0.252);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.8,-22.8,151.4,47.4);


(lib.Symbol52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#302D2E").s().p("ABLDrIgWh7IhjAAIgcB7IhgAAIB3nVIB2AAIBoHVgAgjArIBNAAIgkjag");
	this.shape.setTransform(-41.1,-14.5,0.318,0.318);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#302D2E").s().p("AAzDrIhMi8IgjAuIAACOIhaAAIAAnVIBaAAIAADMIBqjMIBlAAIh3DMIB7EJg");
	this.shape_1.setTransform(-52.1,-14.5,0.318,0.318);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#302D2E").s().p("AA4DrIAAjPQghAHgpAAQg5AAgjgjQgigjAAg7IAAiMIBZAAIAACAQABBHBBAAQAbAAASgFIAAjCIBZAAIAAHVg");
	this.shape_2.setTransform(-64,-14.5,0.318,0.318);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#302D2E").s().p("AiXBWIAAipQAAihCXAAQBJAAAlAjQAqAoAABWIAACpQAABVgqAnQglAjhJAAQiXAAAAifgAg8hdIAAC+QABBMA7AAQAeAAAPgTQAQgTAAgmIAAi9QAAgmgQgVQgQgWgdAAQg7AAgBBQg");
	this.shape_3.setTransform(-75.7,-14.4,0.318,0.318);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#302D2E").s().p("AiRDrIAAnVICnAAQA4AAAjAoQAhAoAAA6QAAA7giAmQgjAqg4AAIhNAAIAADAgAg4gYIAtAAQAgAAARgTQARgSAAgiQAAhGhCAAIgtAAg");
	this.shape_4.setTransform(-87.3,-14.5,0.318,0.318);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#302D2E").s().p("AhyDGQgcgmAAhJIAAipQAAhSAlgoQAkgoBHAAQBEAAAlAkQAkAlAABCIAAAXIhZAAIAAgLQAAgsgMgSQgMgSgdAAQgbAAgMASQgNASAAAsIAAC5QAAAsAMATQANASAaAAQAcAAANgSQANgTAAgsIAAgaIBZAAIAAAUQAACfiOAAQhPAAgkgvg");
	this.shape_5.setTransform(-98.7,-14.4,0.318,0.318);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#302D2E").s().p("AhyDGQgcgmgBhJIAAipQAAhSAlgoQAlgoBHAAQBEAAAlAkQAlAlAABCIAAAXIhaAAIAAgLQAAgsgMgSQgMgSgdAAQgaAAgNASQgNASAAAsIAAC5QAAAsANATQALASAbAAQAcAAANgSQANgTAAgsIAAgaIBaAAIAAAUQgBCfiOAAQhPAAgkgvg");
	this.shape_6.setTransform(-110,-14.4,0.318,0.318);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#302D2E").s().p("ABLDrIgWh7IhjAAIgdB7IhfAAIB3nVIB2AAIBoHVgAgjArIBNAAIgkjag");
	this.shape_7.setTransform(-121.3,-14.5,0.318,0.318);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#302D2E").s().p("AiRDrIAAnVICnAAQA4AAAiAoQAiAoAAA6QAAA7giAmQgjAqg4AAIhNAAIAADAgAg4gYIAtAAQBCAAAAhHQAAhGhCAAIgtAAg");
	this.shape_8.setTransform(-131.8,-14.5,0.318,0.318);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#302D2E").s().p("AiODrIAAnVICjAAQA6AAAfAjQAbAeAAAxQAAAlgRAeQgSAfgcAGQAjAOARAZQARAbAAAuQAAA/gaAlQgdAng0AAgAg1CoIA3AAQAaAAAMgRQAMgRAAgnQAAhIgygBIg3AAgAg1grIAvAAQA1AAAAhAQAAgfgMgOQgMgPgcAAIgwAAg");
	this.shape_9.setTransform(134.2,-14.5,0.318,0.318);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#302D2E").s().p("Ah8DrIAAnVID6AAIAABIIihAAIAABuICSAAIAABFIiSAAIAACSIChAAIAABIg");
	this.shape_10.setTransform(123.6,-14.5,0.318,0.318);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#302D2E").s().p("ABPEbIAAhgIjwAAIAAnVIBZAAIAAGOIB0AAIAAmOIBaAAIAAGOIAcAAIAACng");
	this.shape_11.setTransform(112.6,-12.9,0.318,0.318);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#302D2E").s().p("ABCDrIAAjAIgsAAIhPDAIhhAAIBbjKQgigPgUgiQgUgkABgsQAAg7AfgnQAjgoA3AAICqAAIAAHVgAgthfQAAAiARASQARATAgAAIAtAAIAAiNIgtAAQhCAAAABGg");
	this.shape_12.setTransform(100.2,-14.5,0.318,0.318);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#302D2E").s().p("AhyDGQgcgmAAhJIAAipQAAhSAlgoQAkgoBHAAQBEAAAlAkQAkAlAABCIAAAXIhZAAIAAgLQAAgsgMgSQgMgSgdAAQgbAAgMASQgNASAAAsIAAC5QAAAsAMATQANASAaAAQAcAAANgSQANgTAAgsIAAgaIBZAAIAAAUQAACfiOAAQhPAAgkgvg");
	this.shape_13.setTransform(89.1,-14.4,0.318,0.318);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#302D2E").s().p("Ah8DrIAAnVID6AAIAABIIihAAIAABuICSAAIAABFIiSAAIAACSIChAAIAABIg");
	this.shape_14.setTransform(78.7,-14.5,0.318,0.318);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#302D2E").s().p("AB6DrIAAmpIgBAAIhZGpIg+AAIhamoIAAAAIAAGoIhUAAIAAnVICPAAIA9EwIA+kwICPAAIAAHVg");
	this.shape_15.setTransform(65.8,-14.5,0.318,0.318);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DF1D42").s().p("AgoBYQgOgOAAghQAAgTAIgNQAHgJAMgHQgXgMAAgiQAAgYAOgNQAPgMAVAAQAXAAANAMQAPANAAAYQAAATgGAMQgGAKgKAFQAOAHAGAJQAGAMAAAUQAAAhgNAOQgOAPgcAAQgbAAgNgPgAgNAOQgFAHAAANIAAALQAAAOAFAHQAFAHAIAAQAJAAAFgHQAGgIgBgNIAAgLQABgbgUAAQgIAAgFAHgAgLhCQgFAHAAAOQAAAaAQAAQAJAAAEgHQAEgGAAgNQAAgPgEgGQgEgGgJAAQgHAAgEAGg");
	this.shape_16.setTransform(44.5,-15.7,1.248,1.248);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DF1D42").s().p("AATGEIAAoVIixAAIAAhqIATAAQBTAAA2goQAtgkAOg8IBmAAIAAMHg");
	this.shape_17.setTransform(28.8,-16,0.318,0.318);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#DF1D42").s().p("AiKAwIAAhfIEVAAIAABfg");
	this.shape_18.setTransform(18.4,-14.7,0.318,0.318);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DF1D42").s().p("AjaGTIFgslIBJAAIlfMlgABQFHQgYgnAAhfQAAheAYgnQAjg7BmAAQBoAAAkA7QAYAoAABdQAABegYAoQgkA7hoAAQhmAAgjg7gACnBtQgJAWAAA+QAAA+AJAXQANAfAnAAQAnAAAMgfQAJgXAAg+QAAg9gJgXQgNgfgmAAQgnAAgNAfgAlkg8QgYgnAAhfQAAheAYgoQAjg6BmAAQBoAAAkA6QAYAoAABeQAABfgYAnQgkA7hoAAQhmAAgjg7gAkMkWQgKAWAAA+QAAA+AKAXQANAfAnAAQAmAAAMgfQAJgXAAg+QAAg+gJgWQgNggglAAQgnAAgNAgg");
	this.shape_19.setTransform(-1.2,-16.5,0.318,0.318);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#DF1D42").s().p("AiYFaQhAg7AAhdIAAmIQAAhbBAg7QA+g4BbAAQBjABA6A3QA7A3AABfIAAGIQAABfg7A6Qg6A6hjgBQhbABg+g7gAg0kIQgYAUAAAiIAAGhQAAAiAYAXQAXAUAeAAQAeAAAXgXQAXgXAAgjIAAmfQAAgigXgTQgWgSgfAAQgeAAgXATg");
	this.shape_20.setTransform(-22.2,-15.9,0.318,0.318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.4,-29.3,275.3,26.5);


(lib.Symbol51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#302D2E").s().p("AiTAOQBPgtBEAAQApAAAjAMQAfAKApAXIAAARQgmgTgRgFQgpgMgzAAQgpAAgjAHQgjAJglAVg");
	this.shape.setTransform(-100.9,-17,0.64,0.64);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#302D2E").s().p("AAyAjQAqAAAAgiQAAgRgRgJQgPgJgYABQg0gBAAAkQAAAXATAKIAAAXIh1gOIAAhgIAXAAIAABLIBFALQgRgQAAgUQAAgeAWgPQASgNAfAAQAjAAAWANQAaAQAAAgQAAA8hBABg");
	this.shape_1.setTransform(-102.7,-9.6,0.64,0.64);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#302D2E").s().p("AheAuQgWgSAAgaQAAgnAkgPQAXgKAwAAQA2AAAaAIQAuAPAAApQAAAagPAPQgPAOgZAAIAAgaQAgAAAAgeQAAgUgggKQgSgFgngDIAAAAQAcANAAAbQAAAegVAQQgRAOgeAAQglAAgWgRgAhKgbQgTAJAAATQAAATASAJQANAHAWAAQAyAAAAgjQAAgkguAAQgXAAgPAIg");
	this.shape_2.setTransform(-102.9,-0.3,0.64,0.64);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#302D2E").s().p("AAiBBIiUhVIAAgXICUAAIAAgVIAXAAIAAAVIA6AAIAAAZIg6AAIAABTgAAiAtIAAg/IhrAAg");
	this.shape_3.setTransform(-103,9.3,0.64,0.64);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#302D2E").s().p("AhLAUQgegKgqgXIAAgRQAoATAPAGQAqALAyAAQApAAAjgHQAkgJAkgVIAAASQhOAthEAAQgpAAgkgMg");
	this.shape_4.setTransform(-100.9,16.4,0.64,0.64);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#302D2E").s().p("Ah5ECQgmgsAAhdQAAhjBOgsQhEglAAhgQAAhIArglQAogjBCABQBDgBAnAjQArAlAABIQAAA2gSAiQgQAegeAPQAnATASAfQASAjAAA6QAABegnArQgmAphTAAQhSAAgngpgAgpArQgPATAAAmIAAAgQAAAnAPAVQAPAUAaABQAbAAAOgWQAPgVAAgnIAAggQAAhNg4AAQgbAAgOAVgAgljCQgMATAAApQAABMAxAAQAyAAAAhMQAAgpgMgTQgLgSgbAAQgZAAgMASg");
	this.shape_5.setTransform(100.1,0,0.64,0.64);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#302D2E").s().p("Ah4ECQgngsAAhdQAAhjBOgsQhEglAAhgQAAhIArglQAogjBCABQBDgBAnAjQArAlAABIQAAA2gSAiQgQAegeAPQAnATASAfQASAjAAA6QAABegmArQgnAphTAAQhSAAgmgpgAgpArQgPATAAAmIAAAgQAAAnAPAVQAPAUAaABQAbAAAOgWQAPgVAAgnIAAggQAAhNg4AAQgbAAgOAVgAgljCQgMATAAApQAABMAxAAQAyAAAAhMQAAgpgMgTQgLgSgbAAQgZAAgMASg");
	this.shape_6.setTransform(75.1,0,0.64,0.64);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#302D2E").s().p("AilElIAAgfQAAhlBDhSQAjgtBAg1QAmglAMgXQAKgVABgdQgBhJg6AAQgbAAgOATQgPAVAAAwIAAAgIhpAAIAAgiQABhUAzgxQAugqA/AAQBFAAAuApQAvArAABFQABAugVAsQgUAsglAjQg+A2gaAbQgpAvgFAtIDHAAIAABZg");
	this.shape_7.setTransform(38.6,-0.4,0.64,0.64);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#302D2E").s().p("AilElIAAgfQABhlBBhSQAlgtBAg1QAlglAMgXQALgVgBgdQAAhJg6AAQgbAAgOATQgPAVAAAwIAAAgIhoAAIAAgiQAAhUA0gxQAtgqA/AAQBFAAAvApQAuArAABFQAAAugTAsQgVAsglAjQg9A2gaAbQgqAvgFAtIDHAAIAABZg");
	this.shape_8.setTransform(13.6,-0.4,0.64,0.64);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#302D2E").s().p("Ah4ECQgngsAAhdQAAhjBOgsQhEglAAhgQAAhIArglQAogjBCABQBDgBAoAjQArAlAABIQAABjhBAiQAnATASAfQASAjAAA6QAABegmArQgnAphTAAQhSAAgmgpgAg3BkIAAAgQAABRA3AAQAbAAAOgWQAPgVAAgnIAAggQAAhNg4AAQg3AAAABOgAgljCQgMATAAApQAABMAxAAQAyAAAAhMQAAgpgMgTQgLgSgbAAQgZAAgMASg");
	this.shape_9.setTransform(-22.2,0,0.64,0.64);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#302D2E").s().p("AikElIAAgfQAAhlBChSQAkgtA/g1QAmglAMgXQAKgVABgdQgBhJg6AAQgbAAgOATQgPAVAAAwIAAAgIhoAAIAAgiQAAhUAzgxQAugqA/AAQBFAAAuApQAvArAABFQABAugVAsQgTAsglAjQg/A2gZAbQgqAvgFAtIDGAAIAABZg");
	this.shape_10.setTransform(-47.5,-0.4,0.64,0.64);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#302D2E").s().p("AikElIAAgfQgBhlBChSQAkgtBAg1QAlglANgXQALgVgBgdQAAhJg6AAQgbAAgOATQgQAVAAAwIAAAgIhnAAIAAgiQAAhUAzgxQAugqA/AAQBFAAAuApQAvArABBFQAAAugVAsQgUAsglAjQg+A2gaAbQgpAvgFAtIDGAAIAABZg");
	this.shape_11.setTransform(-72.5,-0.4,0.64,0.64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.4,-19.2,220.8,38.4);


(lib.Symbol50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgEAFIgCgFQABgCACgCQABgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape.setTransform(77.2,26.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAcIAAg3IAhAAIAAAIIgXAAIAAAvg");
	this.shape_1.setTransform(73.9,24.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgMAjQgGgEgEgHQgDgHAAgLQAAgJAEgJQADgJAGgGQAFgFAGgCQAFgDAHgBIAEgBIAEAAIAAAJIgEAAIgEAAQgIACgEAEQgGAEgDAGQgDAFgBAHQADgEAFgCQAEgDAFAAQAHAAAFADQAFADADAFQADAEAAAIQAAAHgDAHQgDAGgGAEQgFADgJABQgGgBgGgEgAgHAAQgEAAgDAEIAAACIgBADQAAAHACAFQACAFAEACQAEADADAAQAHAAAEgFQAFgFAAgIQAAgJgFgEQgEgDgHAAQgDAAgEADg");
	this.shape_2.setTransform(65.7,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AADAmIAAhBIgBAAIgMAHIgCgIIAPgJIAJAAIAABLg");
	this.shape_3.setTransform(59,23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgNAjQgFgEgEgKQgDgJAAgMQAAgMAEgIQADgKAGgEQAGgFAGAAQANAAAGALQAHAKAAASQAAASgHALQgHALgMAAQgHAAgGgFgAgKgXQgEAJAAAOQAAAPAEAJQAEAHAGABQAFgBADgEQAEgEACgGQABgIAAgJQAAgIgBgIQgCgGgDgEQgEgEgFgBQgFABgFAHg");
	this.shape_4.setTransform(53.4,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgXAnIAAgGIAIgIIAPgRQAGgHADgDQADgGAAgGQAAgEgBgEQgCgDgDgCQgEgCgEAAQgFAAgEACIgHAEIgDgHQAEgEAFgCQAGgCAGAAQAHAAAFADQAGAEACAFQADAFAAAGQgBAHgDAGQgDAFgGAHIgMAOIgHAGIAhAAIAAAJg");
	this.shape_5.setTransform(47.2,23.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgOAbQgEgCgCgEQgCgEAAgEQABgKAIgEQAJgFAPgBIAAgBIAAgGQgBgDgDgBQgDgDgEAAIgIABIgHADIgCgHQADgCAFgBQAFgCAEAAQAJAAAEADQAFAEACAFQACAGAAAGIAAAUIAAAHIABAGIgKAAIgBgHIAAAAQgCADgFADQgFADgEAAQgGgBgEgCgAAAAAQgDAAgEAEQgEADAAAFQAAAFADACQADADAEAAQAEAAADgDQAEgDABgDIAAgDIABgBIAAgJIgEAAIgIAAg");
	this.shape_6.setTransform(38.5,24.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEAcIAAgvIgSAAIAAgIIAtAAIAAAIIgSAAIAAAvg");
	this.shape_7.setTransform(33.3,24.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIAaQgHgEgDgGQgEgHABgJQAAgHADgHQAEgHAHgEQAHgDAHAAIAJAAIAHACIgDAJIgFgCIgIgBQgGAAgDADQgEADgDAFQgCAFAAAEQABAHACAEQACAFAFACQADADAFABIAIgCIAGgCIABAIIgHACIgKABQgHAAgGgDg");
	this.shape_8.setTransform(28.2,24.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgWAhIAEgCIAFgDIAEgFIAFgHIAAgBIABgCIgBgBIAAgBIgWg0IAMAAIANAjIABAGIAAADIACgDIACgHIAMgiIALAAIgQApIgHAPIgEAMIgHAIIgHAFIgGACg");
	this.shape_9.setTransform(22.6,25.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgQAcIAAg3IAhAAIAAAIIgXAAIAAAvg");
	this.shape_10.setTransform(17.8,24.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAdIgJAAIgHgBIAAg3IAIgBIAKAAIAGAAIAJACQAEABADADQACADAAAFQAAAFgDAEQgEADgFABQAHABAEACQAEAEAAAGQAAAFgDAEQgEADgEACIgKACIgFABIgDAAgAgMAVIAEABIAEAAIAGgBQAEgBADgCQADgCAAgEQAAgEgCgDQgDgCgEgBIgIgBIgHAAgAgMgDIAIAAIAFgBIAHgDQACgCAAgEQAAgEgEgCQgEgCgGAAIgEAAIgEAAg");
	this.shape_11.setTransform(12.4,24.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgOAbQgEgCgCgEQgCgEAAgEQABgKAIgEQAJgFAPgBIAAgBIAAgGQgBgDgDgBQgDgDgEAAIgIABIgHADIgCgHQADgCAFgBQAFgCAEAAQAJAAAEADQAFAEACAFQACAGAAAGIAAAUIAAAHIABAGIgKAAIgBgHIAAAAQgCADgFADQgFADgEAAQgGgBgEgCgAAAAAQgDAAgEAEQgEADAAAFQAAAFADACQADADAEAAQAEAAADgDQAEgDABgDIAAgDIABgBIAAgJIgEAAIgIAAg");
	this.shape_12.setTransform(6.1,24.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AADAmIAAhBIgBAAIgMAHIgCgIIAQgJIAJAAIAABLg");
	this.shape_13.setTransform(-2.7,23.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgOAmIgJgDIADgIIAHACIAKADQAFgBAEgCQAEgCACgEIABgHQAAgFgDgDQgDgEgEgCQgDgBgFgBIgGAAIAAgGIAGAAIAGgBQAEgBADgDQACgDAAgEIgBgHQgBgCgDgBIgGgDIgJADIgHADIgDgIIAJgEIALgCQAGAAAFADQAFADADAEQACAEAAAFQAAAGgEAFQgDAEgHADIAAABQAEAAAEABQAEADADAEQACAEAAAGQAAAFgDAGQgDAFgHADQgGADgHABIgMgCg");
	this.shape_14.setTransform(-8.5,23.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgOAaQgFgEgEgGQgEgHAAgJQAAgIAEgHQAEgGAGgEQAHgEAGAAQAIAAAGAEQAHAEAEAGQACAHABAIQAAAJgFAIQgEAHgHACQgGAEgGAAQgHAAgHgEgAgIgRQgFACgCAGQgBAFAAAEQAAAGACAFQACAFAEADQAEADAEAAQAEAAAFgDQADgDACgFQADgFAAgGIgBgJQgDgFgDgDQgEgEgGAAQgFAAgDAEg");
	this.shape_15.setTransform(-17.3,24.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AANAcIAAgvIgZAAIAAAvIgLAAIAAg3IAvAAIAAA3g");
	this.shape_16.setTransform(-23.8,24.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AADAmIAAhBIgBAAIgMAHIgCgIIAPgJIAJAAIAABLg");
	this.shape_17.setTransform(-33.2,23.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgNAjQgFgEgEgKQgDgJAAgMQAAgMAEgIQADgKAGgEQAGgFAGAAQANAAAGALQAHAKAAASQAAASgHALQgHALgMAAQgHAAgGgFgAgKgXQgEAJAAAOQAAAPAEAJQAEAHAGABQAFgBADgEQAEgEACgGQABgIAAgJQAAgIgBgIQgCgGgDgEQgEgEgFgBQgFABgFAHg");
	this.shape_18.setTransform(-38.9,23.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgIAaQgGgEgEgGQgDgHAAgJQAAgHADgHQAEgHAHgEQAHgDAHAAIAJAAIAHACIgDAJIgFgCIgIgBQgGAAgCADQgFADgDAFQgCAFAAAEQAAAHADAEQADAFAEACQADADAFABIAIgCIAFgCIACAIIgGACIgKABQgIAAgGgDg");
	this.shape_19.setTransform(-47.1,24.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBAWIAOgWIgOgVIAHAAIAPAVIgPAWgAgVAWIAQgWIgQgVIAJAAIANAVIgNAWg");
	this.shape_20.setTransform(-55,24.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAfAoIgCgjIgBgKIgBgNIAAgLIAAAAIgFAQIgFANIgOAoIgGAAIgOgnIgFgOIgEgQIAAAAIAAALIgBANIgBALIgCAiIgKAAIAGhPIANAAIAOAnIAFANIACAMIAAAAIADgMIAFgNIAOgnIAOAAIAFBPg");
	this.shape_21.setTransform(-62.3,23.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAEIAAgGIAbAAIAAAGg");
	this.shape_22.setTransform(-69,24.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgEAcIAAgvIgSAAIAAgIIAtAAIAAAIIgSAAIAAAvg");
	this.shape_23.setTransform(-73.3,24.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAMAcIgCgEIgDgHQgDgIgEgCQgDgEgHAAIgDAAIAAAZIgJAAIAAg3IAJAAIAAAZIADAAIAUgZIANAAIgYAaQAGABAEACQAFAEADAJIADAGIADAHg");
	this.shape_24.setTransform(-78.2,24.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgLAaQgGgDgEgHQgDgHAAgIQAAgHADgHQADgHAGgEQAHgEAGgBQAHABAFACQAEADADAEQADAEABAFIABAJIAAABIAAACIgnAAQAAAHADAEQADAFAEACQAEACAEAAIAJgBIAHgCIACAHIgIADIgMABQgHAAgGgEgAAPgEIgBgHQgCgEgDgDQgDgDgGAAQgDAAgEADQgDACgCAEQgCAEAAAEIAdAAIAAAAg");
	this.shape_25.setTransform(-84.5,24.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGAdIgHgBIAAgwIgRAAIAAgIIAcAAIAAAUIACgBIAGAAIAMACQAFACAEAEQAEACAAAIQAAAEgBAEIgFAFQgFAEgGACIgNABIgHAAgAgCgBIAAAWIACAAIADAAIAJgBQAEgBACgDQADgCAAgFQAAgFgDgCQgDgCgEAAIgIgBIgDAAIgCAAg");
	this.shape_26.setTransform(-91.2,24.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgMAoQgEgDgEgGQgDgFgBgIIgBgNQAAgJACgHQABgIAGgHQADgFAHgEQAGgDAGgBIAHgCIAIgCIgBAJIgGACIgGABQgHABgDADQgGACgDAFQgDAEgBAFIgCAKIABAAQADgGAFgDQAFgEAFAAQAHAAAFAEQAGADADAGQADAFABAJQgBAOgHAIQgGAIgNAAQgGAAgGgDgAgGgEQgEACgCACIgCAGIAAAGIABAHIACAIQACAEADACQADADADgBQAGAAADgDQADgDACgFQABgFAAgFIgBgKQgCgEgDgDQgDgDgGgBQgEABgCACg");
	this.shape_27.setTransform(-97.6,23.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgSAkQgIgFgFgJQgEgKAAgMQAAgLAFgJQAEgKAJgFQAIgFAJAAQALAAAIAFQAJAFAEAJQAEAJAAAMQAAAMgFAKQgFAJgIAFQgJAFgJAAQgKAAgIgFgAgNgbQgGAFgCAHQgDAIAAAHQAAAJADAHQADAHAFAFQAGAEAHABQAIgBAGgEQAFgFADgHQADgIAAgIQAAgFgBgGQgCgGgDgEQgDgFgFgDQgFgDgGAAQgHAAgGAFg");
	this.shape_28.setTransform(-104.9,23.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgEAFIgCgFQABgCACgCQABgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_29.setTransform(93.2,11.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgYAoIAAhOIAJgBIAMAAQAFAAAGACQAFABAEADQADADADAFQACAEgBAFQAAAGgBAEQgCAFgDABQgEAEgHACQgGADgFAAIgFgBIgEAAIAAAggAgNgeIAAAeIAEAAIAFAAQAHAAAFgCQAGgFAAgIQAAgIgGgEQgEgEgHAAIgGAAIgEABg");
	this.shape_30.setTransform(88.9,7.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJAkQgKgFgFgIQgFgKAAgNQAAgLAFgJQAGgJAJgGQAJgFALAAIANABIAGACIgDAJIgHgCIgJgBQgJAAgFADQgHAEgEAIQgEAHAAAJQAAAKADAHQAEAHAHAEQAFAFAKAAIAJgBIAIgDIACAIIgIADIgNABQgJAAgJgFg");
	this.shape_31.setTransform(82,7.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgeAgIAFgCIADgCQAEgEABgFIACgNIABgMIAAgiIAtAAIAABPIgLAAIAAhGIgYAAIAAAZIgBAQQgBAJgCAHQgDAHgFAEIgGACIgHABg");
	this.shape_32.setTransform(74.4,7.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AANAWIgOgWIAOgVIAIAAIgPAVIAPAWgAgFAWIgPgWIAPgVIAHAAIgPAVIAPAWg");
	this.shape_33.setTransform(68.9,8.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgSAkQgIgFgFgJQgEgKAAgMQAAgLAFgJQAEgKAJgFQAIgFAJAAQALAAAIAFQAJAFAEAJQAEAJAAAMQAAAMgFAKQgFAJgIAFQgJAFgJAAQgKAAgIgFgAgNgbQgGAFgCAHQgDAIAAAHQAAAJADAHQADAHAFAFQAGAEAHABQAIgBAGgEQAFgFADgHQADgIAAgIQAAgFgBgGQgCgGgDgEQgDgFgFgDQgFgDgGAAQgHAAgGAFg");
	this.shape_34.setTransform(59.6,7.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgSAkQgIgFgFgJQgEgKAAgMQAAgLAFgJQAEgKAJgFQAIgFAJAAQALAAAIAFQAJAFAEAJQAEAJAAAMQAAAMgFAKQgFAJgIAFQgJAFgJAAQgKAAgIgFgAgNgbQgGAFgCAHQgDAIAAAHQAAAJADAHQADAHAFAFQAGAEAHABQAIgBAGgEQAFgFADgHQADgIAAgIQAAgFgBgGQgCgGgDgEQgDgFgFgDQgFgDgGAAQgHAAgGAFg");
	this.shape_35.setTransform(51.4,7.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgSAkQgIgFgFgJQgEgKAAgMQAAgLAFgJQAEgKAJgFQAIgFAJAAQALAAAIAFQAJAFAEAJQAEAJAAAMQAAAMgFAKQgFAJgIAFQgJAFgJAAQgKAAgIgFgAgNgbQgGAFgCAHQgDAIAAAHQAAAJADAHQADAHAFAFQAGAEAHABQAIgBAGgEQAFgFADgHQADgIAAgIQAAgFgBgGQgCgGgDgEQgDgFgFgDQgFgDgGAAQgHAAgGAFg");
	this.shape_36.setTransform(43.1,7.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAOAdIAAgZIgIAAIgGABIgCADIgDAFIgDAFIgCAGIgBACIgBADIgLAAIABgDIACgDIADgHIACgGIAEgFIADgCIAEgBIAAgBIgHgBQgEAAgCgDQgCgEAAgEQAAgFACgDQACgDADgCIAJgDIAJgBIAKAAIAIABIAAA4gAAAgUIgGADQgDADAAADQABAEACADIAGACIAFABIAFAAIAEAAIAAgTIgEAAIgFAAIgFAAg");
	this.shape_37.setTransform(33.1,9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgIAaQgHgEgDgGQgDgHAAgJQAAgHADgHQAEgHAHgEQAHgDAHAAIAJAAIAGACIgCAJIgFgCIgIgBQgGAAgDADQgEACgDAGQgCAFAAAEQABAGACAFQACAFAFACQADADAFAAIAIgBIAGgCIABAIIgHACIgKABQgHABgGgEg");
	this.shape_38.setTransform(27.9,9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgEAcIAAgvIgSAAIAAgIIAtAAIAAAIIgSAAIAAAvg");
	this.shape_39.setTransform(22.6,9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgLAaQgGgDgEgHQgDgHAAgIQAAgHADgHQADgHAGgEQAHgEAGgBQAHABAFACQAEADADAEQADAEABAFIABAJIAAABIAAACIgnAAQAAAHADAEQADAFAEACQAEACAEAAIAJgBIAHgCIACAHIgIADIgMABQgHAAgGgEgAAPgEIgBgHQgCgEgDgDQgDgDgGAAQgDAAgEADQgDACgCAEQgCAEAAAEIAdAAIAAAAg");
	this.shape_40.setTransform(17.2,9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAOAdIAAgZIgIAAIgGABIgCADIgDAFIgDAFIgCAGIgBACIgBADIgLAAIABgDIACgDIADgHIACgGIAEgFIADgCIAEgBIAAgBIgHgBQgEAAgCgDQgCgEAAgEQAAgFACgDQACgDADgCIAJgDIAJgBIAKAAIAIABIAAA4gAAAgUIgGADQgDADAAADQABAEACADIAGACIAFABIAFAAIAEAAIAAgTIgEAAIgFAAIgFAAg");
	this.shape_41.setTransform(10.8,9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgZAVIAEgBIACgBQAEgEABgGIABgNIAAgYIAnAAIAAA4IgLAAIAAgwIgSAAIAAAQQAAAKgBAHQgCAJgGADIgFADIgGABg");
	this.shape_42.setTransform(4.7,9.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgGAdIgJAAIgHgBIAAg3IAIgBIALAAIAGAAIAIACQAEABACADQADADABAFQgBAFgEAEQgDADgFABQAHABAEACQAEAEAAAGQAAAFgDAEQgEADgEACIgKACIgFABIgDAAgAgMAVIAEABIAFAAIAFgBQAEgBADgCQADgCAAgEQAAgEgDgDQgCgCgEgBIgHgBIgIAAgAgMgDIAIAAIAFgBIAGgDQADgCAAgEQAAgEgEgCQgEgCgGAAIgEAAIgEAAg");
	this.shape_43.setTransform(-0.7,9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgOAbQgEgCgCgEQgCgDAAgFQABgKAIgEQAJgFAPgBIAAgBIAAgGQgBgCgDgCQgDgDgEAAIgIABIgHADIgCgHQADgCAFgBQAFgCAEAAQAJABAEACQAFAEACAFQACAGAAAGIAAAUIAAAHIABAGIgKAAIgBgHIAAAAQgCADgFADQgFADgEAAQgGgBgEgCgAAAAAQgDAAgEADQgEADAAAGQAAAFADACQADADAEAAQAEAAADgDQAEgDABgEIAAgCIABgBIAAgJIgEAAIgIAAg");
	this.shape_44.setTransform(-7,9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgEAcIAAgvIgSAAIAAgIIAtAAIAAAIIgSAAIAAAvg");
	this.shape_45.setTransform(-12.2,9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgIAaQgHgEgDgGQgDgHgBgJQAAgHAFgHQADgHAHgEQAHgDAIAAIAJAAIAFACIgCAJIgFgCIgHgBQgHAAgDADQgEACgCAGQgDAFAAAEQABAGACAFQACAFAFACQACADAHAAIAHgBIAFgCIACAIIgGACIgLABQgGABgHgEg");
	this.shape_46.setTransform(-17.3,9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgNAaQgGgDgEgHQgEgHAAgJQAAgIAEgHQAEgGAGgEQAHgEAGAAQAIAAAGAEQAHAEADAGQAEAHAAAIQAAAJgFAIQgEAGgHADQgGAEgGAAQgHAAgGgEgAgJgRQgEADgBAFQgCAFAAAEQAAAGACAFQACAFAEADQAEADAEAAQAEAAAFgDQADgDACgFQADgFAAgGIgCgJQgCgFgDgDQgEgEgGAAQgEAAgFAEg");
	this.shape_47.setTransform(-23.3,9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAUAmIgBgTIgmAAIgBATIgHAAIgBgbIAFAAQAEgFACgGQABgEABgGIABgMIAAgPIAkAAIAAAwIAHAAIgBAbgAgFgTIgBALIgBAIIgCAGIgEAFIAZAAIAAgoIgRAAg");
	this.shape_48.setTransform(-29.9,9.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgLAaQgGgDgEgHQgDgHAAgIQAAgHADgHQADgHAGgEQAHgEAGgBQAHABAFACQAEADADAEQADAEABAFIABAJIAAABIAAACIgnAAQAAAHADAEQADAFAEACQAEACAEAAIAJgBIAHgCIACAHIgIADIgMABQgHAAgGgEgAAPgEIgBgHQgCgEgDgDQgDgDgGAAQgDAAgEADQgDACgCAEQgCAEAAAEIAdAAIAAAAg");
	this.shape_49.setTransform(-35.9,9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgaApIAAg9IAAgKIAAgJIAJAAIABAKQADgFAFgDQAFgDAFAAQAIAAAFAEQAGADADAHQADAHAAAIQAAALgDAFQgFAHgFADQgHAEgGAAQgEgBgFgCQgEgCgDgFIgBAAIAAAggAgJgcQgEADgCAGIAAACIgBADIAAAKIABACIAAACQACADAEAEQAFADAEAAQAFAAADgDQAEgCADgFQABgDAAgHQAAgGgBgFQgCgFgEgDQgEgDgFAAQgEAAgFAEg");
	this.shape_50.setTransform(-42.2,10.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AANAcIAAgvIgZAAIAAAvIgLAAIAAg3IAvAAIAAA3g");
	this.shape_51.setTransform(-49,9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgOAbQgEgCgCgEQgCgDAAgFQABgKAIgEQAJgFAPgBIAAgBIAAgGQgBgCgDgCQgDgDgEAAIgIABIgHADIgCgHQADgCAFgBQAFgCAEAAQAJABAEACQAFAEACAFQACAGAAAGIAAAUIAAAHIABAGIgKAAIgBgHIAAAAQgCADgFADQgFADgEAAQgGgBgEgCgAAAAAQgDAAgEADQgEADAAAGQAAAFADACQADADAEAAQAEAAADgDQAEgDABgEIAAgCIABgBIAAgJIgEAAIgIAAg");
	this.shape_52.setTransform(-57.9,9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAMAcIgDgEIgCgHQgDgIgEgCQgDgEgHAAIgDAAIAAAZIgKAAIAAg3IAKAAIAAAZIADAAIAUgZIANAAIgXAaQAEAAAFADQAFAEADAJIADAGIAEAHg");
	this.shape_53.setTransform(-63.1,9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAMAcIAAgXIgBAAIgHADIgGABQgGAAgEgBQgFgCgCgFQgCgBAAgIIAAgTIAKAAIAAATQAAAFADADQACACAGAAQADAAADgCIAGAAIAAgbIAKAAIAAA3g");
	this.shape_54.setTransform(-69.5,9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgOAaQgFgDgEgHQgEgHAAgJQAAgIAEgHQAEgGAGgEQAHgEAGAAQAIAAAGAEQAHAEADAGQAEAHAAAIQAAAJgFAIQgEAGgHADQgGAEgGAAQgHAAgHgEgAgIgRQgFADgBAFQgCAFAAAEQAAAGACAFQACAFAEADQAEADAEAAQAEAAAFgDQADgDACgFQADgFAAgGIgCgJQgCgFgDgDQgEgEgGAAQgFAAgDAEg");
	this.shape_55.setTransform(-75.9,9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgZApIAAg9IgBgKIAAgJIAKAAIAAAKQADgFAGgDQAFgDAEAAQAIAAAFAEQAGADADAHQADAHAAAIQAAALgDAFQgFAHgGADQgGAEgGAAQgEgBgEgCQgFgCgDgFIgBAAIAAAggAgIgcQgFADgCAGIAAACIgBADIAAAKIABACIAAACQACADAEAEQAFADAEAAQAFAAAEgDQADgCADgFQACgDAAgHQAAgGgCgFQgDgFgDgDQgEgDgFAAQgEAAgEAEg");
	this.shape_56.setTransform(-82.4,10.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgIAaQgHgEgDgGQgDgHAAgJQAAgHADgHQAEgHAHgEQAHgDAHAAIAJAAIAGACIgCAJIgFgCIgIgBQgGAAgDADQgEACgDAGQgCAFAAAEQABAGACAFQACAFAFACQADADAFAAIAIgBIAGgCIABAIIgHACIgKABQgHABgGgEg");
	this.shape_57.setTransform(-88.7,9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgIAaQgHgEgDgGQgDgHAAgJQAAgHADgHQAEgHAHgEQAHgDAHAAIAJAAIAGACIgCAJIgFgCIgIgBQgGAAgDADQgEACgDAGQgCAFAAAEQABAGACAFQACAFAFACQADADAFAAIAIgBIAGgCIABAIIgHACIgKABQgHABgGgEg");
	this.shape_58.setTransform(-94.1,9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgOAbQgEgCgCgEQgCgDAAgFQABgKAIgEQAJgFAPgBIAAgBIAAgGQgBgCgDgCQgDgDgEAAIgIABIgHADIgCgHQADgCAFgBQAFgCAEAAQAJABAEACQAFAEACAFQACAGAAAGIAAAUIAAAHIABAGIgKAAIgBgHIAAAAQgCADgFADQgFADgEAAQgGgBgEgCgAAAAAQgDAAgEADQgEADAAAGQAAAFADACQADADAEAAQAEAAADgDQAEgDABgEIAAgCIABgBIAAgJIgEAAIgIAAg");
	this.shape_59.setTransform(-99.9,9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgYAoIAAhOIAJgBIAMAAQAFAAAGACQAGABADADQAEADACAFQACAEAAAFQgBAGgBAEQgCAFgDABQgEAEgHACQgGADgGAAIgEgBIgEAAIAAAggAgNgeIAAAeIAEAAIAEAAQAIAAAFgCQAGgFAAgIQAAgIgGgEQgEgEgHAAIgGAAIgEABg");
	this.shape_60.setTransform(-105.6,7.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgEAFIgCgFQABgCACgCQABgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_61.setTransform(75.4,-4.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgBAWIAOgWIgOgVIAGAAIARAVIgRAWgAgVAWIARgWIgRgVIAJAAIAOAVIgOAWg");
	this.shape_62.setTransform(71.5,-6.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAfAoIgCgjIgBgLIgBgMIAAgKIAAAAIgFAOIgFAOIgOAoIgGAAIgOgnIgFgPIgEgOIAAAAIAAAKIgBANIgBALIgCAiIgKAAIAGhPIANAAIAOAnIAFANIACAMIAAAAIADgMIAFgNIAOgnIAOAAIAFBPg");
	this.shape_63.setTransform(64.2,-7.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgNADIAAgFIAbAAIAAAFg");
	this.shape_64.setTransform(57.5,-6.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgEAcIAAgvIgSAAIAAgIIAtAAIAAAIIgSAAIAAAvg");
	this.shape_65.setTransform(53.2,-6.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AANAcIgEgEIgCgHQgDgIgEgCQgDgEgHAAIgCAAIAAAZIgLAAIAAg3IALAAIAAAYIACAAIAUgYIANAAIgXAaQAEAAAFADQAFAEADAJIADAGIAEAHg");
	this.shape_66.setTransform(48.3,-6.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgLAaQgGgDgEgHQgDgHAAgIQAAgHADgHQADgHAGgEQAHgEAGgBQAHABAFACQAEADADAEQADAEABAFIABAJIAAABIAAACIgnAAQAAAHADAEQADAFAEACQAEACAEAAIAJgBIAHgCIACAHIgIADIgMABQgHAAgGgEgAAPgEIgBgHQgCgEgDgDQgDgDgGAAQgDAAgEADQgDACgCAEQgCAEAAAEIAdAAIAAAAg");
	this.shape_67.setTransform(42,-6.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgGAdIgHgBIAAgwIgRAAIAAgIIAcAAIAAAUIACgBIAGAAIAMACQAFACAEAEQAEACAAAIQAAAEgBAEIgFAFQgFAEgGACIgNABIgHAAgAgCgBIAAAWIACAAIADAAIAJgBQAEgBACgDQADgCAAgFQAAgFgDgCQgDgCgEAAIgIgBIgDAAIgCAAg");
	this.shape_68.setTransform(35.3,-6.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgLAoQgGgEgDgFQgDgGgCgHIgBgOQAAgHACgJQACgIAFgFQAEgGAGgEQAHgDAGgCIAIgBIAGgCIAAAJIgFACIgHABQgHABgDADQgFACgDAFQgDAEgCAFIgCAKIAAAAQADgGAGgDQAFgEAEAAQAIAAAGAEQAFADADAGQADAFAAAIQAAAPgHAIQgHAIgMABQgGgBgFgDgAgHgEQgDACgBACIgDAGIgBAGIABAHIADAIQACAEADACQAEACACABQAFgBAEgDQADgDACgFQABgFABgGIgCgKQgCgDgDgDQgEgDgFgBQgEABgDACg");
	this.shape_69.setTransform(28.9,-7.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgSAkQgIgFgFgJQgEgKAAgMQAAgLAFgJQAEgKAJgFQAIgFAJAAQALAAAIAFQAJAFAEAJQAEAJAAAMQAAAMgFAKQgFAJgIAFQgJAFgJAAQgKAAgIgFgAgNgbQgGAFgCAHQgDAIAAAHQAAAJADAHQADAHAFAFQAGAEAHABQAIgBAGgEQAFgFADgHQADgIAAgIQAAgFgBgGQgCgGgDgEQgDgFgFgDQgFgDgGAAQgHAAgGAFg");
	this.shape_70.setTransform(21.6,-7.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgEAFIgCgFQABgCACgCQABgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_71.setTransform(13.7,-4.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgXAoIAAhOIAJgBIALAAQAFAAAGACQAFABAEADQAEADABAFQACAEAAAFQABAGgCAEQgCAFgDABQgEAEgHACQgGADgFAAIgFgBIgEAAIAAAggAgNgeIAAAeIAEAAIAFAAQAHAAAFgCQAGgFAAgIQAAgIgGgEQgEgEgHAAIgGAAIgEABg");
	this.shape_72.setTransform(9.4,-7.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgKAkQgJgFgFgIQgFgKAAgNQAAgLAFgJQAFgJAKgGQAJgFALAAIAMABIAHADIgDAIIgGgCIgJgCQgKABgFAEQgIADgDAIQgEAHAAAJQAAAKAEAHQADAHAHAEQAFAFAKAAIAKgBIAHgDIACAIIgIADIgNABQgJAAgKgFg");
	this.shape_73.setTransform(2.6,-7.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgeAgIAFgCIADgCQAEgDABgGIACgNIABgLIAAgjIAtAAIAABPIgLAAIAAhGIgYAAIAAAZIgBAQQgBAIgCAIQgDAGgFAFIgGACIgHABg");
	this.shape_74.setTransform(-5,-7.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AANAWIgOgWIAOgVIAJAAIgQAVIAQAWgAgEAWIgQgWIAQgVIAGAAIgOAVIAOAWg");
	this.shape_75.setTransform(-10.6,-6.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgSAkQgIgFgFgJQgEgKAAgMQAAgLAFgJQAEgKAJgFQAIgFAJAAQALAAAIAFQAJAFAEAJQAEAJAAAMQAAAMgFAKQgFAJgIAFQgJAFgJAAQgKAAgIgFgAgNgbQgGAFgCAHQgDAIAAAHQAAAJADAHQADAHAFAFQAGAEAHABQAIgBAGgEQAFgFADgHQADgIAAgIQAAgFgBgGQgCgGgDgEQgDgFgFgDQgFgDgGAAQgHAAgGAFg");
	this.shape_76.setTransform(-19.8,-7.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgSAkQgIgFgFgJQgEgKAAgMQAAgLAFgJQAEgKAJgFQAIgFAJAAQALAAAIAFQAJAFAEAJQAEAJAAAMQAAAMgFAKQgFAJgIAFQgJAFgJAAQgKAAgIgFgAgNgbQgGAFgCAHQgDAIAAAHQAAAJADAHQADAHAFAFQAGAEAHABQAIgBAGgEQAFgFADgHQADgIAAgIQAAgFgBgGQgCgGgDgEQgDgFgFgDQgFgDgGAAQgHAAgGAFg");
	this.shape_77.setTransform(-28.1,-7.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgSAkQgIgFgFgJQgEgKAAgMQAAgLAFgJQAEgKAJgFQAIgFAJAAQALAAAIAFQAJAFAEAJQAEAJAAAMQAAAMgFAKQgFAJgIAFQgJAFgJAAQgKAAgIgFgAgNgbQgGAFgCAHQgDAIAAAHQAAAJADAHQADAHAFAFQAGAEAHABQAIgBAGgEQAFgFADgHQADgIAAgIQAAgFgBgGQgCgGgDgEQgDgFgFgDQgFgDgGAAQgHAAgGAFg");
	this.shape_78.setTransform(-36.3,-7.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgEAaIgCgFQABgEACgCQABgCACAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgCAAgCgCgAgEgOIgCgGQABgDACgCQABgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_79.setTransform(-44.2,-6.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AANAcIgEgEIgCgHQgDgIgEgCQgDgEgHAAIgCAAIAAAZIgKAAIAAg3IAKAAIAAAYIACAAIAUgYIANAAIgYAaQAFAAAFADQAFAEADAJIADAGIAEAHg");
	this.shape_80.setTransform(-47.9,-6.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAOAcIAAgYIAAgHIABgGIAAgJIgFAKIgFAIIgHANIgJAPIgMAAIAAg3IAKAAIAAAYIAAAGIgBAHIAAAIIAAAAIAEgGIACgFIAEgHIAQgbIAMAAIAAA3g");
	this.shape_81.setTransform(-54.6,-6.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAeAmIgBgTIhCAAIAAg4IAKAAIAAAwIAUAAIAAgwIAJAAIAAAwIAUAAIAAgwIAKAAIAAAwIAGAAIAAAbg");
	this.shape_82.setTransform(-62.2,-5.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAOAoIAAgYIAAgJIABgHIAAgGIgFAHIgFAJIgHAPIgJAPIgMAAIAAg4IAKAAIAAAXIAAAIIgBAHIAAAIIAAAAIAEgGIACgGIAEgGIAQgcIAMAAIAAA4gAgHgbQgEgCgBgDIgCgHIAIAAQAAAEACACQACADACAAQADAAACgDIACgGIAIAAQgBAHgEAEQgEADgGAAQgEAAgDgCg");
	this.shape_83.setTransform(-70.2,-7.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgOAaQgGgDgDgHQgEgHAAgJQAAgIAEgHQADgGAIgEQAGgEAGAAQAIAAAHAEQAGAEAEAGQADAHAAAIQAAAJgEAIQgFAGgGAEQgHADgGAAQgHAAgHgEgAgJgRQgEADgCAFQgCAFAAAEQABAGACAFQACAFAEADQAEADAEAAQAEAAAEgDQAEgDADgFQACgFAAgGIgBgJQgCgFgFgDQgDgEgGAAQgEAAgFAEg");
	this.shape_84.setTransform(-76.8,-6.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgaApIAAg9IAAgKIAAgJIAJAAIABAKQADgFAFgDQAGgDAFAAQAGAAAGAEQAFADAEAHQADAHAAAIQAAALgEAFQgEAHgFADQgHAEgGAAQgEgBgFgCQgFgCgCgFIgBAAIAAAggAgJgcQgEADgBAGIgBACIgBADIAAAKIABACIAAACQABADAFAEQAEADAFAAQAEAAAEgDQAFgCABgFQACgDAAgHQAAgGgCgFQgCgFgDgDQgEgDgFAAQgEAAgFAEg");
	this.shape_85.setTransform(-83.4,-5.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgEAcIAAgvIgSAAIAAgIIAtAAIAAAIIgSAAIAAAvg");
	this.shape_86.setTransform(-89.5,-6.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgIAaQgHgEgDgGQgEgHAAgJQAAgHAFgHQADgHAHgEQAHgDAIAAIAJAAIAFADIgCAIIgFgCIgHgCQgHABgCADQgFACgCAGQgDAEAAAFQAAAGADAFQADAFAEACQACADAHAAIAHgBIAFgCIACAJIgGABIgKABQgHABgHgEg");
	this.shape_87.setTransform(-94.6,-6.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgOAbQgEgCgCgEQgCgDAAgFQABgKAIgEQAJgFAPgBIAAAAIAAgHQgBgCgDgCQgDgDgEAAIgIABIgHADIgCgHQADgCAFgBQAFgCAEAAQAJABAEADQAFADACAGQACAFAAAGIAAAUIAAAHIABAGIgKAAIgBgHIAAAAQgCADgFADQgFADgEAAQgGAAgEgDgAAAAAQgDAAgEADQgEAEAAAFQAAAFADACQADADAEAAQAEAAADgDQAEgDABgEIAAgCIABgBIAAgJIgEAAIgIAAg");
	this.shape_88.setTransform(-100.4,-6.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgNAoQgGgBgFgDIADgIIAIADIAKACQAHgBAFgEQAFgEAAgHQAAgGgDgDQgEgEgFgBIgIgBIgFAAIAAgGIAFAAQAFAAADgCQAEgCACgEQADgDAAgEQAAgGgEgEQgEgDgFAAIgJACIgHADIgDgHQAEgDAFgCQAGgBAGAAQAFAAAFACQAGACADAFQADAEAAAGQAAAFgCAEIgGAHIgJAEQAGABAEAAQAFADACAEQADAFAAAGQAAAIgFAFQgEAFgGADQgHACgFAAIgLgBg");
	this.shape_89.setTransform(-106.2,-7.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgEAFIgCgFQABgCACgCQABgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_90.setTransform(84.3,-19.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgNAbQgEgCgDgGQgDgFAAgKIAAggIAKAAIAAAeQAAAIADAFQADAFAHAAQACAAADgBIAEgEIADgEIABgDIAAgDIAAghIALAAIAAAoIAAAIIAAAIIgJAAIgBgKIAAAAIgEAFIgGAEIgHACQgFAAgFgCg");
	this.shape_91.setTransform(79.8,-21.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgNAdIAAgmIAAgJIAAgJIAJAAIAAAMIABAAQACgGACgEQAFgDAFAAIABAAIACAAIAAAKIgCAAIgBAAQgGAAgEAEQgBADgCAGIAAADIgBACIAAAdg");
	this.shape_92.setTransform(74.9,-21.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("AgEAFIgCgFQABgCACgCQABgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_93.setTransform(71.4,-19.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AAHAlIgHgBQgBgBgBgCQgDgCgBgEIgBgJIAAgeIgJAAIAAgHIAJAAIAAgPIAJgCIAAARIAPAAIAAAHIgPAAIAAAeQAAAFACADQABADAFAAIADAAIADgBIAAAIIgEABIgFAAg");
	this.shape_94.setTransform(68.1,-22.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgNAdIAAgmIAAgJIAAgJIAJAAIAAAMIABAAQACgGACgEQAEgDAGAAIABAAIACAAIAAAKIgCAAIgCAAQgFAAgEAEQgCADgBAGIAAADIgBACIAAAdg");
	this.shape_95.setTransform(64.3,-21.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgOAcQgEgDgCgEQgCgEAAgEQABgLAIgDQAJgFAPAAIAAgBIAAgHQgBgCgDgCQgDgDgEAAIgIABIgHADIgCgHQADgCAFgBQAFgCAEAAQAJABAEADQAFADACAGQACAFAAAGIAAATIAAAIIABAGIgKAAIgBgHIAAAAQgCADgFADQgFADgEAAQgGAAgEgCgAAAAAQgDABgEACQgEADAAAGQAAAFADACQADADAEAAQAEAAADgDQAEgDABgEIAAgCIABgBIAAgJIgEAAIgIAAg");
	this.shape_96.setTransform(58.9,-21.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgEAqIAAhTIAJAAIAABTg");
	this.shape_97.setTransform(54.7,-23.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgEAoIAAg4IAJAAIAAA4gAgEgcQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQABgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQACAAACACQABAAAAABQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABQAAABAAAAQgBABAAAAQAAABgBAAQgCACgCAAQgCAAgCgCg");
	this.shape_98.setTransform(51.9,-22.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgWAcIAAgGIAYggIAEgFIAEgEIgeAAIAAgIIArAAIAAAGIgYAfIgEAGIgEAEIAgAAIAAAIg");
	this.shape_99.setTransform(47.9,-21.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgEAFIgCgFQABgCACgCQABgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_100.setTransform(44.2,-19.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AANAcIgIgbIgDgHIgCgKIgBAKIgDAHIgJAbIgKAAIgSg3IALAAIAIAbIACAKIACAJIABAAIACgJIADgKIAJgbIAHAAIAJAbIADAKIACAJIABAAIABgJIADgKIAIgbIALAAIgTA3g");
	this.shape_101.setTransform(38.9,-21.8);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AANAcIgIgbIgDgHIgCgKIgBAKIgDAHIgJAbIgKAAIgSg3IALAAIAIAbIACAKIACAJIABAAIACgJIADgKIAJgbIAHAAIAJAbIADAKIACAJIABAAIABgJIADgKIAIgbIALAAIgTA3g");
	this.shape_102.setTransform(29.9,-21.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AANAcIgIgbIgDgHIgCgKIgBAKIgDAHIgJAbIgKAAIgSg3IALAAIAIAbIACAKIACAJIABAAIACgJIADgKIAJgbIAHAAIAJAbIADAKIACAJIABAAIABgJIADgKIAIgbIALAAIgTA3g");
	this.shape_103.setTransform(20.9,-21.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgEAaIgCgFQABgEACgCQABgCACAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgCAAgCgCgAgEgOIgCgGQABgDACgCQABgCACAAQADAAACACQACACAAADQAAAEgCACQgCACgDAAQgCAAgCgCg");
	this.shape_104.setTransform(12.7,-21.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AAOAdIAAgYIgIAAIgGABIgCACIgDAFIgDAFIgCAGIgBACIgBADIgLAAIABgDIACgDIADgHIACgGIAEgFIADgCIAEgCIAAAAIgHgBQgEAAgCgDQgCgEAAgEQAAgEACgEQACgDADgCIAJgDIAJgBIAKAAIAIABIAAA4gAAAgUIgGADQgDADAAAEQABADACADIAGADIAFAAIAFAAIAEAAIAAgTIgEAAIgFAAIgFAAg");
	this.shape_105.setTransform(8.1,-21.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAOAcIAAgYIAAgHIABgGIAAgJIgFAKIgFAIIgHANIgJAPIgMAAIAAg3IAKAAIAAAYIAAAGIgBAHIAAAIIAAABIAEgHIACgFIAEgGIAQgcIAMAAIAAA3g");
	this.shape_106.setTransform(2.1,-21.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AASAmIgBgTIgqAAIAAg4IAKAAIAAAwIAZAAIAAgwIAKAAIAAAwIAGAAIAAAbg");
	this.shape_107.setTransform(-4.3,-20.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgOAcQgEgDgCgEQgCgEAAgEQABgLAIgDQAJgFAPAAIAAgBIAAgHQgBgCgDgCQgDgDgEAAIgIABIgHADIgCgHQADgCAFgBQAFgCAEAAQAJABAEADQAFADACAGQACAFAAAGIAAATIAAAIIABAGIgKAAIgBgHIAAAAQgCADgFADQgFADgEAAQgGAAgEgCgAAAAAQgDABgEACQgEADAAAGQAAAFADACQADADAEAAQAEAAADgDQAEgDABgEIAAgCIABgBIAAgJIgEAAIgIAAg");
	this.shape_108.setTransform(-10.9,-21.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgZApIAAg9IgBgKIAAgJIAKAAIAAAKQADgFAGgDQAFgDAEAAQAIAAAFAEQAFADAEAHQADAHAAAIQAAALgEAFQgDAHgHADQgFAEgHAAQgEgBgEgCQgFgCgDgFIAAAAIAAAggAgIgcQgFADgCAGIAAACIAAADIAAAKIAAACIAAACQACADAEAEQAEADAFAAQAEAAAFgDQADgCACgFQADgDAAgHQAAgGgDgFQgBgFgEgDQgEgDgFAAQgEAAgEAEg");
	this.shape_109.setTransform(-16.8,-20.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AgOAcQgEgDgCgEQgCgEAAgEQABgLAIgDQAJgFAPAAIAAgBIAAgHQgBgCgDgCQgDgDgEAAIgIABIgHADIgCgHQADgCAFgBQAFgCAEAAQAJABAEADQAFADACAGQACAFAAAGIAAATIAAAIIABAGIgKAAIgBgHIAAAAQgCADgFADQgFADgEAAQgGAAgEgCgAAAAAQgDABgEACQgEADAAAGQAAAFADACQADADAEAAQAEAAADgDQAEgDABgEIAAgCIABgBIAAgJIgEAAIgIAAg");
	this.shape_110.setTransform(-23.5,-21.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AgZAVIAEgBIACgCQAEgDABgGIABgNIAAgYIAnAAIAAA4IgLAAIAAgwIgSAAIAAAQQAAAJgBAJQgCAHgGAEIgFADIgGABg");
	this.shape_111.setTransform(-29.7,-21.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AANAcIgEgFIgCgGQgDgIgEgCQgDgEgHAAIgCAAIAAAZIgKAAIAAg3IAKAAIAAAYIACAAIAUgYIANAAIgYAZQAGACAEACQAFAFADAHIADAHIADAHg");
	this.shape_112.setTransform(-34.8,-21.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgLAaQgGgDgEgHQgDgHAAgIQAAgHADgHQADgHAGgEQAHgEAGgBQAHABAFACQAEADADAEQADAEABAFIABAJIAAABIAAACIgnAAQAAAHADAEQADAFAEACQAEACAEAAIAJgBIAHgCIACAHIgIADIgMABQgHAAgGgEgAAPgEIgBgHQgCgEgDgDQgDgDgGAAQgDAAgEADQgDACgCAEQgCAEAAAEIAdAAIAAAAg");
	this.shape_113.setTransform(-41.1,-21.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AAUAmIgBgTIgmAAIAAATIgIAAIgBgbIAFAAQAEgFACgGQACgEAAgGIABgMIAAgPIAkAAIAAAwIAHAAIgBAbgAgFgTIgBALIgBAIIgCAGIgEAFIAZAAIAAgoIgRAAg");
	this.shape_114.setTransform(-47.3,-20.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAOAdIAAgYIgIAAIgGABIgCACIgDAFIgDAFIgCAGIgBACIgBADIgLAAIABgDIACgDIADgHIACgGIAEgFIADgCIAEgCIAAAAIgHgBQgEAAgCgDQgCgEAAgEQAAgEACgEQACgDADgCIAJgDIAJgBIAKAAIAIABIAAA4gAAAgUIgGADQgDADAAAEQABADACADIAGADIAFAAIAFAAIAEAAIAAgTIgEAAIgFAAIgFAAg");
	this.shape_115.setTransform(-56.3,-21.8);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgOAcQgEgDgCgEQgCgEAAgEQABgLAIgDQAJgFAPAAIAAgBIAAgHQgBgCgDgCQgDgDgEAAIgIABIgHADIgCgHQADgCAFgBQAFgCAEAAQAJABAEADQAFADACAGQACAFAAAGIAAATIAAAIIABAGIgKAAIgBgHIAAAAQgCADgFADQgFADgEAAQgGAAgEgCgAAAAAQgDABgEACQgEADAAAGQAAAFADACQADADAEAAQAEAAADgDQAEgDABgEIAAgCIABgBIAAgJIgEAAIgIAAg");
	this.shape_116.setTransform(-62,-21.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AANAcIAAgaIgZAAIAAAaIgLAAIAAg3IALAAIAAAXIAZAAIAAgXIALAAIAAA3g");
	this.shape_117.setTransform(-68,-21.8);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AgEAcIAAgvIgSAAIAAgIIAtAAIAAAIIgSAAIAAAvg");
	this.shape_118.setTransform(-73.7,-21.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AANAcIgEgFIgCgGQgDgIgEgCQgDgEgHAAIgCAAIAAAZIgLAAIAAg3IALAAIAAAYIACAAIAUgYIANAAIgXAZQAEACAFACQAFAFADAHIADAHIAEAHg");
	this.shape_119.setTransform(-78.6,-21.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgLAaQgGgDgEgHQgDgHAAgIQAAgHADgHQADgHAGgEQAHgEAGgBQAHABAFACQAEADADAEQADAEABAFIABAJIAAABIAAACIgnAAQAAAHADAEQADAFAEACQAEACAEAAIAJgBIAHgCIACAHIgIADIgMABQgHAAgGgEgAAPgEIgBgHQgCgEgDgDQgDgDgGAAQgDAAgEADQgDACgCAEQgCAEAAAEIAdAAIAAAAg");
	this.shape_120.setTransform(-84.9,-21.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgOAaQgGgDgDgHQgEgHAAgJQAAgIAEgHQADgGAIgEQAGgEAGAAQAIAAAHAEQAGAEAEAGQADAHAAAIQAAAJgEAIQgFAHgGADQgHADgGAAQgHgBgHgDgAgJgRQgEADgCAFQgCAFAAAEQABAGACAFQACAFAEADQAEADAEAAQAEAAAEgDQAEgDADgFQACgFAAgGIgBgJQgCgFgFgDQgDgEgGAAQgEAAgFAEg");
	this.shape_121.setTransform(-91.2,-21.8);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AgaApIAAg9IAAgKIAAgJIAJAAIABAKQADgFAFgDQAGgDAFAAQAGAAAGAEQAFADAEAHQADAHAAAIQAAALgEAFQgEAHgFADQgHAEgGAAQgEgBgFgCQgFgCgCgFIgBAAIAAAggAgJgcQgEADgBAGIgBACIgBADIAAAKIABACIAAACQABADAFAEQAEADAFAAQAEAAAEgDQAFgCABgFQACgDAAgHQAAgGgCgFQgCgFgDgDQgEgDgFAAQgEAAgFAEg");
	this.shape_122.setTransform(-97.8,-20.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AASAoIAAhGIgjAAIAABGIgLAAIAAhPIA5AAIAABPg");
	this.shape_123.setTransform(-105.2,-22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-32.3,222.2,64.6);


(lib.Symbol49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhPBgQgngnAAg5IAAAAQAAg4AngnQAngmA5AAQAiAAAaAMQAZAMARAUIguAuIgDgFQgYgZgeAAQgbAAgTAVQgTAVAAAfIAAAAQAAAfATAVQATAVAbAAQAYAAASgOQAIgFAHgIIAAAAIABgBIAsAsQgSAUgUAKQgdAPgmAAQg2AAgmgmg");
	this.shape.setTransform(-4.8,4.4,0.534,0.534);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DD3951").s().p("AknErIAAmcICci5IGzAAIAAGcIiVC5g");
	this.shape_1.setTransform(0,0,0.534,0.534);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhsCBIAAkBIBtAAQAxAAAdAaQAeAZAAAqIAAACQAAAqgeAcQgeAdgxAAIgoAAIAAA/gAgoAIIAmAAQAUAAAMgJQANgLAAgQQAAgTgMgLQgNgLgUAAIgmAAg");
	this.shape_2.setTransform(30.6,4.4,0.534,0.534);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DD3951").s().p("AknErIAAmcICci5IGzAAIAAGcIiVC5g");
	this.shape_3.setTransform(34.9,0,0.534,0.534);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ah2CAIAAg5IAEgBIAAAAQAOgEALgNQALgNADgOQAKggAAhJIAAgwIC4AAIAAD6Ig/ABIAAjBIg+AAIgBAgQgCAhgDARQgFAkgJAVQgHASgNAOQgTASgcAFQgLADgKAAg");
	this.shape_4.setTransform(-40,4.4,0.534,0.534);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DD3951").s().p("AknErIAAmcICbi5IG0AAIAAGcIiWC5g");
	this.shape_5.setTransform(-34.9,0,0.534,0.534);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.7,-15.9,101.5,32);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("A6SjqIABABQivl2AAmeQAAl6CSlZQCNlNEBkBQECkBFNiNQFZiSF4AAQF6AAFYCSQFOCNEBEBQEBEBCNFNQCSFZAAF6QAAGfiuF1IAAgBMgaTAwpg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.7,-287.9,371.5,576);


(lib.Symbol46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// flash0.ai
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2A2C2F").s().p("AheBwQgugpgBhHQABhFAugqQAqgmA5AAQAyAAAkAbQAqAeAHA3IhIAAQgPgsgwAAQgeAAgUAXQgUAXAAAjQAAAhAUAXQAUAZAeAAQAYAAARgMQARgMAGgXIBJAAQgIA6gqAfQgkAbgzAAIgBAAQg5AAgpgmg");
	this.shape.setTransform(69.5,12.8,0.229,0.229);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2A2C2F").s().p("AAqCTIg9hyQgKACgTAAIAABwIhLAAIAAklIBLAAIAABwIAGAAQAuAAAOgjQAIgTAAg6IBLAAQAAA9gGAYQgLArgmAXIBOCCIAAAMg");
	this.shape_1.setTransform(62.7,12.8,0.229,0.229);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2A2C2F").s().p("AhaCTIAAklICyAAIAABEIhpAAIAAApIBgAAIAABBIhgAAIAAA0IBsAAIAABDg");
	this.shape_2.setTransform(56.1,12.8,0.229,0.229);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#2A2C2F").s().p("ABJCVIhJirIhICrIhIAAIAAgLICBkeIAeAAICCEeIAAALg");
	this.shape_3.setTransform(49.6,12.8,0.229,0.229);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2A2C2F").s().p("AAsCTIAAjfIhXAAIAADfIhLAAIAAklIDtAAIAAElg");
	this.shape_4.setTransform(42.4,12.8,0.229,0.229);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2A2C2F").s().p("ABBCTIAAiDIg+BCIgGAAIg9hCIAACDIhLAAIAAklIAbAAIBwCAIBxiAIAbAAIAAElg");
	this.shape_5.setTransform(34.6,12.8,0.229,0.229);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2A2C2F").s().p("AhkByQgugqAAhIQAAhHAugqQAqgnA6AAQA8AAApAnQAvAqAABHQAABIgvAqQgpAmg8AAQg6AAgqgmgAgwg6QgXAWAAAkQAAAlAXAWQAUAVAcgBQAdABAVgVQAWgWAAglQAAgkgWgWQgVgVgdABQgcgBgUAVg");
	this.shape_6.setTransform(26.6,12.8,0.229,0.229);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#2A2C2F").s().p("AAqCTIg9hyQgLACgSAAIAABwIhLAAIAAklIBLAAIAABwIAFAAQAvAAAOgjQAHgTABg6IBLAAQAAA9gGAYQgLArgnAXIBPCCIAAAMg");
	this.shape_7.setTransform(19.6,12.8,0.229,0.229);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#2A2C2F").s().p("Ah6DBIAAklIBLAAIAACPICPiQIAbAAIAAEmIhLAAIAAiRIiQCRgAgniGQgUgTAAgjIAqgEQACAXAYAAQAbAAAEgXIAqAEQgCBIhGAAQgfAAgSgSg");
	this.shape_8.setTransform(7.1,11.8,0.229,0.229);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#2A2C2F").s().p("AhkByQgugqAAhIQAAhHAugqQApgnA7AAQA8AAApAnQAuAqAABHQAABIguAqQgpAmg8AAQg7AAgpgmgAgwg6QgWAWAAAkQAAAlAWAWQAVAVAbgBQAdABAUgVQAXgWAAglQAAgkgXgWQgUgVgdABQgbgBgVAVg");
	this.shape_9.setTransform(-0.6,12.8,0.229,0.229);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2A2C2F").s().p("ABJCVIhJirIhICrIhIAAIAAgLICCkeIAdAAICCEeIAAALg");
	this.shape_10.setTransform(-7.7,12.8,0.229,0.229);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#2A2C2F").s().p("Ah6CUIAAklIBLAAIAACQICQiSIAaAAIAAEmIhMAAIAAiQIiPCRg");
	this.shape_11.setTransform(-15,12.8,0.229,0.229);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#2A2C2F").s().p("ABzCTIg/hyIgPACIAABwIhJAAIAAhwIgPgCIg/ByIhSAAIAAgMIBOiCQgmgXgLgrQgGgYAAg9IBLAAQAAA4AGASQANAjArACIAAhvIBJAAIAABvQAsgCAMgjQAGgSAAg4IBLAAQAAA+gGAXQgLArgmAXIBOCCIAAAMg");
	this.shape_12.setTransform(-23.5,12.8,0.229,0.229);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#2A2C2F").s().p("AhPF2IAApYIi9AAIAAiTIIZAAIAACTIi7AAIAAJYg");
	this.shape_13.setTransform(66.3,-5.3,0.229,0.229);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2A2C2F").s().p("AkhF2IAArrIFAAAQB9AABIBYQA/BOgBBuQAABrg/BNQhHBYh9AAIibAAIAADHgAh8AaICaAAQAtAAAcgmQAYgkABg0QAAgygYgjQgbgogvgBIiaAAg");
	this.shape_14.setTransform(51.3,-5.3,0.229,0.229);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#2A2C2F").s().p("ADNF7IgthiIk/AAIgtBiIimAAIAAgKIFSrrIA/AAIFULrIAAAKgAhtCOIDbAAIhukCg");
	this.shape_15.setTransform(33.1,-5.4,0.229,0.229);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#2A2C2F").s().p("ADNF7IjNneIjMHeIinAAIAAgKIFTrrIA/AAIFVLrIAAAKg");
	this.shape_16.setTransform(14.2,-5.4,0.229,0.229);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2A2C2F").s().p("Ak4F5IAArtICpAAIAAGRIGXmVIAxAAIAALvIisAAIAAmSImVGUg");
	this.shape_17.setTransform(-4.5,-5.3,0.229,0.229);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#2A2C2F").s().p("AjDFIQhCg+gEhzICOAAQAFAuAeAbQAeAcAtgBQA0ABAfghQAdgeAAgqQAAgqgcgdQghghgzAAIgmAAIAAiCIAkAAQAnAAAYgZQAXgYAAgjQgBghgVgXQgYgagmAAQgjgBgWAOQgRAMgHAUIiRAAQABhFAqgtQAeggAwgQQAugRA7gBQBwAABBBDQA6A8AABUQAAAngQAlQgRAjgbAVIgTAPIAUALQA1AcAZArQAZArAABAQAABqhMA+QhLA+iAgBQh1AAhBg8g");
	this.shape_18.setTransform(-21.8,-5.2,0.229,0.229);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#3A3838","#606163"],[0,1],-11.6,-3.7,7.1,6.1).s().p("AgsBVQgagNgPgrQgMgfgHg2IgEghIARAJIChBQIAlASIACABQg3AtgkARQgUAJgSAAQgNAAgLgFg");
	this.shape_19.setTransform(-57.3,9.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#3A3838","#606163"],[0,1],-6.4,13.8,6.8,-10.8).s().p("AhSB3IB3joIAhAAQgHgNgLgLIAAAAQAtAvgTBDQgUBChRBLIgXAUg");
	this.shape_20.setTransform(-41.9,-2.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#DF3951","#DF3951","#862D39"],[0,0.004,1],-3.4,8.1,5.2,-8).s().p("AgyAmQgHhgAjgzIAAAAQgLARgHAYIBdAAIhQCWIgRgIIAEAgIgDAEQgEgfgDgpg");
	this.shape_21.setTransform(-63.7,-6.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#DF3951","#862D39"],[0,1],-16.5,0,16.6,0).s().p("ACDAvIjIAAIhfAAQAHgYAMgRQAPgVAXgOQAegRAoAAQAOAAAOACIAJADQA/ALAqAXQAZAMARASQAKALAIANg");
	this.shape_22.setTransform(-51.3,-18.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.9,-23.3,141.7,42);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2C").s().p("Ao8AAII8o8II9I8Io9I9g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-57.3,114.8,114.8);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A72D4C").s().p("Ax6AAIR6x6IR7R6Ix7R7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.7,-114.7,229.6,229.6);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2C").s().p("A64AAIa464Ia5a4I65a5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.1,-172.1,344.3,344.4);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A72D4C").s().p("Egj2AAAMAj2gj2MAj3Aj2Mgj3Aj3g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.5,-229.5,459.1,459.1);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2C").s().p("Egs0AAAMAs0gs0MAs1As0Mgs1As1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.9,-286.9,573.8,573.8);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A72D4C").s().p("Eg1yAAAMA1yg1yMA1yA1yMg1yA1yg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-344.3,-344.3,688.6,688.6);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2B2B2C").s().p("Eg+vAAAMA+vg+vMA+wA+vMg+wA+wg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-401.6,-401.6,803.3,803.3);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AyvfPMAAAg+eMAlfAAAMAAAA+eg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,240,400);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B8D945").s().p("EgQ1An2QnwjSl/l/QmAl/jRnxQjaoDAAoyQAAoyDaoCQDRnxGAl/QF/l/HwjSQIDjaIyAAQIyAAIDDaQHxDSF/F/QF/F/DTHxQDZICAAIyQAAIzjZICQjTHxl/F/Ql/F/nxDSQoDDaoyAAQoyAAoDjag");
	this.shape.setTransform(276.9,276.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553.7,553.7);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#79C464").s().p("EgRBAoWQn3jVmEmEQmEmEjUn3QjdoIAAo6QAAo4DdoJQDUn3GEmEQGEmEH3jVQIJjcI4AAQI6AAIIDcQH3DVGEGEQGEGEDVH3QDcIIAAI5QAAI6jcIIQjVH3mEGEQmEGEn3DVQoIDco6AAQo4AAoJjcg");
	this.shape.setTransform(280.2,280.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560.5,560.5);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01B37D").s().p("EgQ0An2QnxjSl/l/QmAl/jSnxQjZoDAAoyQAAoyDZoCQDSnxGAl/QF/l/HxjSQICjaIyAAQIzAAICDaQHxDSF/F/QGAF/DSHxQDZICAAIyQAAIyjZIDQjSHxmAF/Ql/F/nxDSQoCDaozAAQoyAAoCjag");
	this.shape.setTransform(276.9,276.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553.8,553.7);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#017E7B").s().p("EgQ1An2QnwjSl/l/QmAmAjRnwQjaoDAAoyQAAoyDaoDQDRnxGAl/QF/l/HwjRQIDjaIyAAQIyAAIDDaQHxDRF/F/QF/F/DTHxQDZIDAAIyQAAIzjZICQjTHwl/GAQl/F/nxDSQoDDaoyAAQoyAAoDjag");
	this.shape.setTransform(276.9,276.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553.7,553.7);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#017269").s().p("EgQ0An3QnxjSl/mAQmAl/jSnxQjZoCAAozQAAoyDZoCQDSnxGAl/QF/l/HxjTQICjZIyAAQIyAAIDDZQHxDTF/F/QF/F/DTHxQDZICAAIyQAAIzjZICQjTHxl/F/Ql/GAnxDSQoCDZozAAQoyAAoCjZg");
	this.shape.setTransform(276.9,276.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553.8,553.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2F5F4E").s().p("EgQ0An3QnxjSl/mAQl/l/jTnxQjZoCAAozQAAoyDZoCQDTnxF/l/QF/mAHxjSQICjZIyAAQIyAAIDDZQHxDSF/GAQF/F/DTHxQDZICAAIyQAAIzjZICQjTHxl/F/Ql/GAnxDSQoDDZoyAAQoyAAoCjZg");
	this.shape.setTransform(276.9,276.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553.7,553.8);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#01A587").s().p("Ap3XYQkjh8jgjgQjhjhh8kjQh/kuAAlKQAAlJB/ktQB8kkDhjhQDgjgEjh8QEuh/FJAAQFJAAEvB/QEjB8DgDgQDhDhB8EkQB/EtAAFJQAAFKh/EuQh8EjjhDhQjgDgkjB8QkuB/lKAAQlJAAkuh/g");
	this.shape.setTransform(162.4,162.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324.7,324.8);


(lib.Symbol5_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#75C3C0").s().p("At8LFQAAltCMlNQCIlBD3j6QD3j5E/iLQFLiPFtgEQheLyndJQQnVJMq/EBQgqi/AAjEg");
	this.shape.setTransform(91.8,112.7,1.027,1.027);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.6,225.4);


(lib.Symbol3_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#38548E").s().p("As2JlQgbiJgYiSIgSh1QgMg2gHhiQgOjBAXjeQAXjhB0j6QAlhPAphIQAVgjANgUQBGiSAnhGQCZEBDNDaQDLDaD1CqQExDRFaB6IgFAVQmyCPlvEXQjmCvi+DbQi/DaiOD+QhbjHhYm4g");
	this.shape.setTransform(91.7,125.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183.4,250.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#017269").s().p("Ap3XYQkjh8jhjgQjgjhh8kjQh/kuAAlKQAAlJB/ktQB8kkDgjhQDhjgEjh8QEuh/FJAAQFKAAEtB/QEkB8DhDgQDgDhB8EkQB/EtAAFJQAAFKh/EuQh8EjjgDhQjhDgkkB8QktB/lKAAQlJAAkuh/g");
	this.shape.setTransform(162.4,162.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324.8,324.8);


(lib.Symbol1sasas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0181CB").s().p("AnkrHIABAAQhTiwgsjAQEFA8DiCPQDcCNClDOQCnDPBZD4QBcEAAAEUQAAEMhXD8QgWA+gSAog");
	this.shape.setTransform(62.9,111.4,1.027,1.027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#496FB6").s().p("AAKHcQASgpAXhAQBakDAAkRQAAkchfkIQhakAirjVQiqjTjkiRQjoiTkMg+IgBgEQKJBIIhFkQIYFdFJIjQBlCkAmEmQAnEogLCoQgKCpAAAkQAABbhICXQghBEh4DUQhmCzglBiQg4COAZBVIgJASg");
	this.shape_1.setTransform(111.5,174.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,349.7);


(lib.Symbol1dddsds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#016C64").s().p("AnKJYQAAjtBEjgQBCjXB+i+QByitCZiKQAsgoAxglQCMhrCdhIIkyI3IgSAAIADAaIpDQyQgRhwAAh6g");
	this.shape.setTransform(57.8,257.9,1.027,1.027);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3DA599").s().p("AuhOJQAAiqAWitQAmktBlkWQBLjRBri/IAEgGQCKj2C6jWQC5jVDfiqQFlkPGniOQgqCzhPCnIAAAAIrOUyQibBGiNBrQgwAmgtAnQiaCKhyCtQh+C+hCDZQhEDgAADuQAAB5ARBxIgIAOQhwl5AAmNg");
	this.shape_1.setTransform(95.6,172.6,1.027,1.027);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191.2,345.2);


(lib.Symbol54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#899D9C").s().p("AkMBDIB2jYIBjC2ICEj8IC8AAIjoG3g");
	this.shape.setTransform(26.9,22.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.9,44.2);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#49668F").s().p("EgPlAk9QnNjDlkljQljlkjCnMQjLndAAoKQAAoJDLndQDCnMFjlkQFkljHNjDQHcjKIJAAQIKAAHdDKQHNDDFjFjQFjFjDDHNQDKHdAAIJQAAIKjKHdQjDHMljFkQljFjnNDDQndDKoKAAQoJAAncjKg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256.7,-256.7,513.4,513.5);


(lib.Symbol10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DF1D42").s().p("EmGnAJXIAAyuMMNPAAAIAASug");
	this.shape_1.setTransform(2500,60);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol61();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.27,scaleY:1.27},49).to({scaleX:1,scaleY:1},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-158.7,-72.5,317.4,148.1);


(lib.Symbol57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol62();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.15,scaleY:1.15},49).to({scaleX:1,scaleY:1},60).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-192.8,201,385.8);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol55copy3();
	this.instance.setTransform(-113.7,-15.2,1,1,0,0,0,-81.5,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.9,-12.7,205.1,34.5);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol55copy2();
	this.instance.setTransform(-115.3,-29.6,1,1,0,0,0,-81.5,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.8,-25.6,176,65.4);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol47();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-185.7,-287.9,371.5,576);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol55copy();
	this.instance.setTransform(-105.7,-18.7,1,1,0,0,0,-81.5,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(116));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-21.6,200.8,47.6);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol55();
	this.instance.setTransform(-97.2,-18.7,1,1,0,0,0,-81.5,-24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(100));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-16.9,151.4,47.4);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol22();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-344.3,-344.3,688.6,688.6);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol23();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-286.9,-286.9,573.8,573.8);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol24();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-229.5,-229.5,459.1,459.1);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol25();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-172.1,-172.1,344.3,344.4);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol26();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.7,-114.7,229.6,229.6);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol27();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-57.3,114.8,114.8);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol12();
	this.instance.setTransform(295.1,333.6,1,1,0,0,0,295.1,333.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553.7,553.7);


(lib.Symbol4_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1sasas();
	this.instance.setTransform(111.5,174.8,1,1,0,0,0,111.5,174.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.17,scaleY:1.17,x:110.6,y:177.3},130).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,223,349.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol11();
	this.instance.setTransform(217.6,255.2,1,1,0,0,0,307.5,255.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,0,560.5,560.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(229.1,290.4,1,1,0,0,0,229.1,290.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,553.8,553.7);


(lib.Symbol2_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbolas1ss();
	this.instance.setTransform(93.7,113.4,1,1,0,0,0,93.7,113.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:113.3,scaleX:1.45,scaleY:1.45,x:75.1,y:125.7},137).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,187.4,226.8);


(lib.Symbol1_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol1dddsds();
	this.instance.setTransform(95.5,172.6,1,1,0,0,0,95.5,172.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.27,scaleY:1.27,x:120.9,y:139.2},143).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191.2,345.2);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_25 = function() {
		/////* stop();
		////*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(25).call(this.frame_25).wait(40));

	// Layer 10
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmtGuQiyizAAj7QAAj6CyiyQCyizD7AAQD7AACzCzQCyCyAAD6QAAD7iyCzQizCyj7AAQj7AAiyiyg");
	this.shape.setTransform(193.1,184.5,1.042,1.042);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(65));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ehj9B2GMAAAjsLMDH7AAAMAAADsLgAg2biMAZ5gv7IgBAAQCtlwAAmYQAAl0iQlUQiLlJj9j9Qj+j9lIiLQlUiQlzAAQl0AAlUCQQlICLj+D9Qj9D9iLFJQiQFUAAF0QAAGZCsFvIAAAAg");
	this.shape_1.setTransform(199.3,391.3);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(65));

	// Layer 6
	this.instance = new lib.Symbol59();
	this.instance.setTransform(-24.9,342.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:false},0).to({x:81.7,y:286},11,cjs.Ease.get(1)).wait(40));

	// Layer 7
	this.instance_1 = new lib.Symbol57();
	this.instance_1.setTransform(416.3,428.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({x:277.1,y:321.5},11,cjs.Ease.get(1)).wait(40));

	// Layer 4
	this.instance_2 = new lib.Symbol58();
	this.instance_2.setTransform(194.8,-110);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({y:73.7},11,cjs.Ease.get(1)).wait(40));

	// flash1.ai
	this.instance_3 = new lib.Symbol60();
	this.instance_3.setTransform(194.5,285);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},14).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-440.5,-364.5,1279.7,1511.6);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_34 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Layer 13
	this.instance_4 = new lib.Symbol39();
	this.instance_4.setTransform(4.5,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(35));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EiDfCHOMAAAkOaMEG/AAAMAAAA7IIh4ABIB4ACMAAADTPgAA8dCMAaTgwpIgBABQCvl2AAmeQAAl6iSlZQiNlNkBkCQkBkAlNiOQlZiSl6AAQl4AAlZCSQlOCOkBEAQkBECiNFNQiSFZAAF6QAAGfCvF1IAAgBg");
	this.shape_2.setTransform(-2.3,169.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(35));

	// Layer 5
	this.instance_5 = new lib.Symbol2();
	this.instance_5.setTransform(275.1,557.6,1,1,0,0,0,162.3,162.3);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(19).to({_off:false},0).to({x:166.1,y:328.1},15,cjs.Ease.get(1)).wait(1));

	// Layer 6
	this.instance_6 = new lib.Symbol3();
	this.instance_6.setTransform(445,-391.3,1,1,0,0,0,276.9,276.8);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(19).to({_off:false},0).to({x:276.8,y:-254.9},15,cjs.Ease.get(1)).wait(1));

	// Layer 7
	this.instance_7 = new lib.Symbol4();
	this.instance_7.setTransform(505.2,424.1,1,1,0,0,0,280.2,280.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({x:273.4,y:274.2},15,cjs.Ease.get(1)).wait(7));

	// Layer 8
	this.instance_8 = new lib.Symbol5();
	this.instance_8.setTransform(-500.2,-336.7,1,1,0,0,0,276.9,276.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({x:-273,y:-254.9},15,cjs.Ease.get(1)).wait(12));

	// Layer 9
	this.instance_9 = new lib.Symbol6();
	this.instance_9.setTransform(-377.9,173.3,1,1,0,0,0,162.3,162.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(8).to({_off:false},0).to({x:-214.3,y:164.2},15,cjs.Ease.get(1)).wait(12));

	// Layer 10
	this.instance_10 = new lib.Symbol7();
	this.instance_10.setTransform(-263.3,551.2,1,1,0,0,0,276.9,276.9);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(3).to({_off:false},0).to({x:-208.7,y:280.8},15,cjs.Ease.get(1)).wait(17));

	// Layer 11
	this.instance_11 = new lib.Symbol8();
	this.instance_11.setTransform(532.9,-34.7,1,1,0,0,0,276.9,276.9);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3).to({_off:false},0).to({x:280.7,y:22.2},15,cjs.Ease.get(1)).wait(17));

	// Layer 12
	this.instance_12 = new lib.Symbol9();
	this.instance_12.setTransform(-486,21.5,1,1,0,0,0,276.9,276.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({x:-156.5,y:-42.1},15,cjs.Ease.get(1)).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-843.9,-695.8,1683.3,1730.8);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_32 = function() {
		///* this.stop()*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(63));

	// Layer 10
	this.instance_13 = new lib.Symbol39();
	this.instance_13.setTransform(505.4,648.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(95));

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Eh7ECANMAAAkAZMD2JAAAMAAABB/IhtABIBtABMAAAC+YgEgBUAk7MAaRgwpIAAABQCvl2AAmeQAAl6iSlZQiNlNkBkBQkCkBlMiNQlaiSl4AAQl6AAlYCSQlOCNkBEBQkBEBiNFNQiSFaAAF5QAAGfCuF1IAAgBg");
	this.shape_3.setTransform(519,702.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(95));

	// Layer 5
	this.instance_14 = new lib.Symbol1_();
	this.instance_14.setTransform(677.4,848.7,1,1,0,0,0,95.5,172.6);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(14).to({_off:false},0).to({x:593.1,y:764.4},9,cjs.Ease.get(1)).wait(72));

	// Layer 6
	this.instance_15 = new lib.Tween1("synched",0);
	this.instance_15.setTransform(570.2,823.5);
	this.instance_15._off = true;

	this.instance_16 = new lib.Tween2("synched",0);
	this.instance_16.setTransform(570.2,823.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},12).to({state:[{t:this.instance_16}]},9).wait(74));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(12).to({_off:false},0).to({_off:true},9,cjs.Ease.get(1)).wait(74));

	// Layer 7
	this.instance_17 = new lib.Symbol2_();
	this.instance_17.setTransform(724,352.5,1,1,0,0,0,93.7,113.4);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(12).to({_off:false},0).to({x:600.1,y:476.4},9,cjs.Ease.get(1)).wait(74));

	// Layer 9
	this.instance_18 = new lib.Symbol5_();
	this.instance_18.setTransform(277.9,339.4,1,1,0,0,0,91.8,112.7);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(21).to({_off:false},0).to({x:414.2,y:475.7},9,cjs.Ease.get(1)).wait(65));

	// Layer 11
	this.instance_19 = new lib.Symbol4_();
	this.instance_19.setTransform(281,763.9,1,1,0,0,0,103,174.8);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(23).to({_off:false},0).to({x:429.8},9,cjs.Ease.get(1)).wait(63));

	// Layer 13
	this.instance_20 = new lib.Symbol3_();
	this.instance_20.setTransform(830.6,595.6,1,1,0,0,0,91.7,125.3);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(20).to({_off:false},0).to({x:597.6},9,cjs.Ease.get(1)).wait(66));

	// Symbol 35
	this.instance_21 = new lib.Symbol35();
	this.instance_21.setTransform(513.1,551.6,0.083,0.083);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({scaleX:1.25,scaleY:1.25,x:522.2,y:642.1},15).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-268.7,-118.4,1575.5,1641.1);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.3,-57.3,114.8,114.8);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiWCXQhAg/AAhYQAAhXBAhAQA/g+BXgBQBZABA/A+QA/BAAABXQAABYg/A/Qg/BAhZgBQhXABg/hAg");
	this.shape.setTransform(1.6,-33.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));

	// Layer 2
	this.instance = new lib.ClipGroup_2("synched",0,false);
	this.instance.setTransform(-0.6,-3.5,0.331,0.331,0,0,0,506.6,640.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-257.5,-254.9,522,543.7);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjIDKQhUhUAAh2QAAh1BUhUQBThTB1AAQB2AABUBTQBTBUAAB1QAAB2hTBUQhUBTh2AAQh1AAhThTg");
	this.shape.setTransform(2.6,-15.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(65));

	// Layer 1
	this.instance = new lib.ClipGroup_1("synched",0,false);
	this.instance.setTransform(0,0,0.44,0.44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-371.4,-306.2,740.8,761.8);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_38 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(2));

	// Layer 12
	this.instance_22 = new lib.Symbol39();
	this.instance_22.setTransform(338.2,437.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(40));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EiUkB65MAAAj1xMEpJAAAMAAAD1xgAuaF0MAaRgwpIAAABQCul2AAmeQAAl6iSlZQiMlNkBkCQkCkAlLiOQlZiSl6AAQl6AAlZCSQlOCOkBEAQkBECiMFNQiSFZAAF6QAAGfCuF1IAAgBg");
	this.shape_4.setTransform(430.7,688.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(40));

	// Layer 5
	this.instance_23 = new lib.Symbol15();
	this.instance_23.setTransform(401.7,401.7,0.135,0.135);
	this.instance_23._off = true;

	this.instance_24 = new lib.Symbol38();
	this.instance_24.setTransform(401.6,401.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23}]},28).to({state:[{t:this.instance_24}]},10).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(28).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:401.6,y:401.6},10).wait(2));

	// Layer 6
	this.instance_25 = new lib.Symbol16();
	this.instance_25.setTransform(401.7,401.7,0.135,0.135);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(25).to({_off:false},0).to({scaleX:1,scaleY:1,x:401.6,y:401.6},10).wait(5));

	// Layer 7
	this.instance_26 = new lib.Symbol17();
	this.instance_26.setTransform(401.7,401.7,0.135,0.135);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(21).to({_off:false},0).to({scaleX:1,scaleY:1,y:401.6},10).wait(9));

	// Layer 8
	this.instance_27 = new lib.Symbol18();
	this.instance_27.setTransform(401.7,401.7,0.135,0.135);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(17).to({_off:false},0).to({scaleX:1,scaleY:1,x:401.6,y:401.6},10).wait(13));

	// Layer 9
	this.instance_28 = new lib.Symbol19();
	this.instance_28.setTransform(401.7,401.7,0.135,0.135);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,x:401.6,y:401.6},10).wait(16));

	// Layer 10
	this.instance_29 = new lib.Symbol20();
	this.instance_29.setTransform(401.7,401.7,0.135,0.135);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1},10).wait(20));

	// Layer 11
	this.instance_30 = new lib.Symbol21();
	this.instance_30.setTransform(401.7,401.7,0.135,0.135);

	this.timeline.addTween(cjs.Tween.get(this.instance_30).to({scaleX:1,scaleY:1},10).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-520.2,-98,1901.9,1573.1);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiXCXQg+g+AAhZQAAhYA+g/QA/g/BYAAQBYAAA/A/QA/A/AABYQAABZg/A+Qg/BAhYAAQhYAAg/hAg");
	this.shape.setTransform(1,-33.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(50));

	// Layer 1
	this.instance = new lib.ClipGroup_3("synched",0,false);
	this.instance.setTransform(1.1,-32.3,0.331,0.331,0,0,0,341.4,340.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284,-177.3,629.4,520.6);


// stage content:
(lib._240x400_zilart_aug = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btnMain.addEventListener("click", function () {
			console.log('Click_btnMain');
			window.callClick();
		});
	}
	this.frame_530 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(530).call(this.frame_530).wait(9));

	// Layer 1
	this.btnMain = new lib.Symbol10_1();
	this.btnMain.setTransform(120,200,0.048,3.333,0,0,0,2499.8,60);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.Symbol10_1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(539));

	// Layer 12
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B3B3B3").ss(2,1,1).p("ASw/PMAAAA+fMglfAAAMAAAg+fg");
	this.shape.setTransform(120,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(539));

	// Symbol 50
	this.instance = new lib.Symbol50();
	this.instance.setTransform(122.4,247.1,0.939,0.939,0,0,0,0.1,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(459).to({_off:false},0).to({alpha:1},11).wait(60).to({alpha:0},8).wait(1));

	// Symbol 51
	this.instance_1 = new lib.Symbol51();
	this.instance_1.setTransform(119.5,181.5,0.765,0.765);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(452).to({_off:false},0).to({alpha:1},11).wait(67).to({alpha:0},8).wait(1));

	// Symbol 52
	this.instance_2 = new lib.Symbol52();
	this.instance_2.setTransform(123,132.5,0.765,0.765,0,0,0,0.2,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(444).to({_off:false},0).to({alpha:1},11).wait(75).to({alpha:0},8).wait(1));

	// Symbol 49
	this.instance_3 = new lib.Symbol49();
	this.instance_3.setTransform(290.7,373.2,0.939,0.939,0,0,0,0.1,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(430).to({_off:false},0).to({x:184.7},5,cjs.Ease.get(1)).to({x:168.6},12).wait(83).to({alpha:0},8).wait(1));

	// flash1.ai
	this.instance_4 = new lib.Symbol46();
	this.instance_4.setTransform(113,-47,1.168,1.168,0,0,0,-5.5,6.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(430).to({_off:false},0).to({regY:7,y:54.6},5,cjs.Ease.get(0.97)).to({y:62.4},12,cjs.Ease.get(0.97)).wait(83).to({alpha:0},8).wait(1));

	// Logo
	this.instance_5 = new lib.Symbol46();
	this.instance_5.setTransform(315.2,371.7,1.046,1.046,0,0,0,-5.3,7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:147.9},5,cjs.Ease.get(1)).to({regX:-5.4,x:137.3},13,cjs.Ease.get(1)).wait(403).to({alpha:0},8).to({_off:true},1).wait(109));

	// shadow
	this.instance_6 = new lib.Symbol54();
	this.instance_6.setTransform(129.2,199.9,1.226,1.226,0,0,0,26.9,22.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(14).to({_off:false},0).to({alpha:1},11).wait(396).to({regY:22.1,y:-167.7},8,cjs.Ease.get(-1)).to({_off:true},1).wait(109));

	// sport_text
	this.instance_7 = new lib.Symbol45();
	this.instance_7.setTransform(376.9,274.4,0.944,0.944,0,0,0,0.2,0.2);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(322).to({_off:false},0).to({x:140.8},6,cjs.Ease.get(0.97)).to({regX:0.1,x:131.4},16,cjs.Ease.get(0.97)).wait(77).to({regX:-0.1,x:-123.4},8,cjs.Ease.get(-1)).to({_off:true},1).wait(109));

	// sport
	this.instance_8 = new lib.ClipGroup("synched",0,false);
	this.instance_8.setTransform(135.4,136.3,0.311,0.311,0,0,0,232.6,346.8);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(322).to({_off:false},0).wait(99).to({mode:"single",startPosition:39},0).to({y:-232.1},8,cjs.Ease.get(-1)).to({_off:true},1).wait(109));

	// kultura_text
	this.instance_9 = new lib.Symbol40();
	this.instance_9.setTransform(364.9,276.1,0.906,0.906,0,0,0,0.1,0.2);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(220).to({_off:false},0).to({regX:0,x:138.3},6,cjs.Ease.get(0.93)).to({regX:0.3,x:129},14,cjs.Ease.get(0.93)).wait(71).to({regX:-0.1,x:-107},11,cjs.Ease.get(-1)).to({_off:true},1).wait(216));

	// kultura
	this.instance_10 = new lib.Symbol30("synched",0,false);
	this.instance_10.setTransform(121.7,113.9,0.923,0.923,0,0,0,-0.3,-3.4);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(220).to({_off:false},0).to({_off:true},124).wait(195));

	// park_text
	this.instance_11 = new lib.Symbol29();
	this.instance_11.setTransform(360.3,277.8,0.944,0.944,0,0,0,0.1,0.2);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(105).to({_off:false},0).to({x:133.7},5,cjs.Ease.get(1)).to({x:124.2},16,cjs.Ease.get(1)).wait(80).to({regX:-0.1,x:-102.2},12,cjs.Ease.get(-1)).to({_off:true},1).wait(320));

	// park
	this.instance_12 = new lib.Symbol1("synched",0,false);
	this.instance_12.setTransform(178.3,167.5,0.692,0.693,0,0,0,82,102.6);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(105).to({_off:false},0).to({_off:true},139).wait(295));

	// arch_text
	this.instance_13 = new lib.Symbol28();
	this.instance_13.setTransform(352.6,277.6,0.944,0.944,0,0,0,0.1,0.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(12).to({_off:false},0).to({regX:0.2,x:126.1},6,cjs.Ease.get(1)).to({regX:0,x:116.6},16,cjs.Ease.get(1)).wait(57).to({regX:-0.1,x:-91},12,cjs.Ease.get(-1)).to({_off:true},1).wait(435));

	// arch
	this.instance_14 = new lib.Symbol14("synched",0,false);
	this.instance_14.setTransform(123.1,86.1,0.923,0.923,0,0,0,0.5,-33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},136).wait(403));

	// BG
	this.instance_15 = new lib.Symbol13();
	this.instance_15.setTransform(120,200,1,1,0,0,0,120,200);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(539));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.5,153.3,580.7,480.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;