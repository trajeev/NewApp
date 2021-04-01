import React from 'react';

  import * as go from 'gojs';
  import { ReactDiagram } from 'gojs-react';

  import './dataflow.styles.scss';  // contains .diagram-component CSS

  // ...

  /**
   * Diagram initialization method, which is passed to the ReactDiagram component.
   * This method is responsible for making the diagram and initializing the model and any templates.
   * The model's data should not be set here, as the ReactDiagram component handles that via the other props.
   */
  function init() {
    // if (window.goSamples) goSamples();  // init for these samples -- you don't need to call this
    const $ = go.GraphObject.make;

    const myDiagram =
      $(go.Diagram,
        {
          initialContentAlignment: go.Spot.Left,
          initialAutoScale: go.Diagram.UniformToFill,
          layout: $(go.LayeredDigraphLayout,
            { direction: 0 }),
          "undoManager.isEnabled": true,
          model: $(go.GraphLinksModel,
            {
                nodeCategoryProperty: "type",
                linkFromPortIdProperty: "frompid",
                linkToPortIdProperty: "topid",
            })
        }
      );

    // when the document is modified, add a "*" to the title and enable the "Save" button

    function makePort(name, leftside) {
      var port = $(go.Shape, "Rectangle",
        {
          fill: "gray", stroke: null,
          desiredSize: new go.Size(8, 8),
          portId: name,  // declare this object to be a "port"
          toMaxLinks: 1,  // don't allow more than one link into a port
          cursor: "pointer"  // show a different cursor to indicate potential link point
        });

      var lab = $(go.TextBlock, name,  // the name of the port
        { font: "7pt sans-serif" });

      var panel = $(go.Panel, "Horizontal",
        { margin: new go.Margin(2, 0) });

      // set up the port/panel based on which side of the node it will be on
      if (leftside) {
        port.toSpot = go.Spot.Left;
        port.toLinkable = true;
        lab.margin = new go.Margin(1, 0, 0, 1);
        panel.alignment = go.Spot.TopLeft;
        panel.add(port);
        panel.add(lab);
      } else {
        port.fromSpot = go.Spot.Right;
        port.fromLinkable = true;
        lab.margin = new go.Margin(1, 1, 0, 0);
        panel.alignment = go.Spot.TopRight;
        panel.add(lab);
        panel.add(port);
      }
      return panel;
    }

    function makeTemplate(typename, icon, background, inports, outports) {
      var node = $(go.Node, "Spot",
        $(go.Panel, "Auto",
          { width: 100, height: 120 },
          $(go.Shape, "Rectangle",
            {
              fill: background, stroke: null, strokeWidth: 0,
              spot1: go.Spot.TopLeft, spot2: go.Spot.BottomRight
            }),
          $(go.Panel, "Table",
            $(go.TextBlock, typename,
              {
                row: 0,
                margin: 3,
                maxSize: new go.Size(80, NaN),
                stroke: "white",
                font: "bold 11pt sans-serif"
              }),
            $(go.Picture, icon,
              { row: 1, width: 16, height: 16, scale: 3.0 }),
            $(go.TextBlock,
              {
                row: 2,
                margin: 3,
                editable: true,
                maxSize: new go.Size(80, 40),
                stroke: "white",
                font: "bold 9pt sans-serif"
              },
              new go.Binding("text", "name").makeTwoWay())
          )
        ),
        $(go.Panel, "Vertical",
          {
            alignment: go.Spot.Left,
            alignmentFocus: new go.Spot(0, 0.5, 8, 0)
          },
          inports),
        $(go.Panel, "Vertical",
          {
            alignment: go.Spot.Right,
            alignmentFocus: new go.Spot(1, 0.5, -8, 0)
          },
          outports)
      );
      myDiagram.nodeTemplateMap.set(typename, node);
    }

    makeTemplate("Table", "images/table.svg", "forestgreen",
      [],
      [makePort("OUT", false)]);

    makeTemplate("Join", "images/join.svg", "mediumorchid",
      [makePort("L", true), makePort("R", true)],
      [makePort("UL", false), makePort("ML", false), makePort("M", false), makePort("MR", false), makePort("UR", false)]);

    makeTemplate("Project", "images/project.svg", "darkcyan",
      [makePort("", true)],
      [makePort("OUT", false)]);

    makeTemplate("Filter", "images/filter.svg", "cornflowerblue",
      [makePort("", true)],
      [makePort("OUT", false), makePort("INV", false)]);

    makeTemplate("Group", "images/group.svg", "mediumpurple",
      [makePort("", true)],
      [makePort("OUT", false)]);

    makeTemplate("Sort", "images/sort.svg", "sienna",
      [makePort("", true)],
      [makePort("OUT", false)]);

    makeTemplate("Export", "images/upload.svg", "darkred",
      [makePort("", true)],
      []);

    myDiagram.linkTemplate =
      $(go.Link,
        {
          routing: go.Link.Orthogonal, corner: 5,
          relinkableFrom: true, relinkableTo: true
        },
        $(go.Shape, { stroke: "gray", strokeWidth: 2 }),
        $(go.Shape, { stroke: "gray", fill: "gray", toArrow: "Standard" })
      );
  }

  /**
   * This function handles any changes to the GoJS model.
   * It is here that you would make any updates to your React state, which is dicussed below.
   */

  // render function...
  function DataFlow() {
    return (
      <div>
        ...
        <ReactDiagram
          initDiagram={init}
          divClassName='diagram-component'
          nodeDataArray={[
            { key: 1, type: 'Table', name: 'Product'},
            { key: 2, type: 'Table', name: 'Sales'},
            { key: 3, type: 'Table', name: 'Period' },
            { key: 4, type: 'Table', name: 'Store' },
            { key: 11, type: 'Join', name: 'Store' },
            { key: 12, type: 'Join', name: 'Store' },
            { key: 13, type: 'Join', name: 'Store' },
            { key:21, type:"Project", name:"Product, Class"},
            { key:31, type:"Filter", name:"Boston, Jan2014"},
            { key:32, type:"Filter", name:"Boston, 2014"},
            { key:41, type:"Group", name:"Sales"},
            { key:42, type:"Group", name:"Total Sales"},
            { key:51, type:"Join", name:"Product Name"},
            { key:61, type:"Sort", name:"Product Name"},
            { key:71, type:"Export", name:"File"}
          ]}
          linkDataArray={[
            { from:1, frompid:"OUT", to:11, topid:"L"},
            { from:2, frompid:"OUT", to:11, topid:"R"},
            { from:3, frompid:"OUT", to:12, topid:"R"},
            { from:4, frompid:"OUT", to:13, topid:"R"},
            { from:11, frompid:"M", to:12, topid:"L"},
            { from:12, frompid:"M", to:13, topid:"L"},
            { from:13, frompid:"M", to:21},
            { from:21, frompid:"OUT", to:31},
            { from:21, frompid:"OUT", to:32},
            { from:31, frompid:"OUT", to:41},
            { from:32, frompid:"OUT", to:42},
            { from:41, frompid:"OUT", to:51, topid:"L"},
            { from:42, frompid:"OUT", to:51, topid:"R"},
            { from:51, frompid:"OUT", to:61},
            { from:61, frompid:"OUT", to:71}
          ]}
        />
        ...
      </div>
    );
  }

  export default DataFlow