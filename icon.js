const sharp = require( "sharp" );
const fs = require( "fs" );
const path = require( "path" );
const pngToIco = require( "png-to-ico" );

// Get the input filename from command line arguments
const inputFile = process.argv[ 2 ];
if( !inputFile ) {
	console.error( "Please provide an input filename." );
	process.exit( 1 );
}

// Construct the output filename by changing the extension to .ico
const outputFileName = path.basename( inputFile, path.extname( inputFile ) ) + ".ico";

// Convert to PNG (as an intermediate step) and then to ICO
sharp( inputFile )
	.toFormat( "png" )
	.toBuffer()
	.then( data => {
		return pngToIco( data );
	} )
	.then( icoData => {
		fs.writeFileSync( outputFileName, icoData );
		console.log( "Icon created successfully:", outputFileName );
	} )
	.catch( err => {
		console.error( "Error converting image:", err );
	} );
