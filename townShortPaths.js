//Ryan Postma
//CMP344
//3/17/2015
//create a real world scinerio for the shortet path function

load("graph.js");

g = new Graph(11);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(0,3);
g.addEdge(0,7);
g.addEdge(0,8);
g.addEdge(0,10);
g.addEdge(1,2);
g.addEdge(1,4);
g.addEdge(1,6);
g.addEdge(2,9);
g.addEdge(2,10);
g.addEdge(3,5);
g.addEdge(3,7);
g.addEdge(3,8);
g.addEdge(3,10);
g.addEdge(4,6);
g.addEdge(6,7);
g.addEdge(8,10);
g.addEdge(9,10);

function shortestPath(x,y) {
	var vertex = y;
	
	var source = x;

	g.bfs(source);

	var paths = g.pathTo(source,vertex);

	g.showPath(paths);

	print("\n");
}

shortestPath(4,5);
