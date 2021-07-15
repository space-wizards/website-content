function losslesswebp($filename) {
    $webpPath = [System.IO.Path]::ChangeExtension($filename, "webp")
    magick $filename -define webp:lossless=true $webpPath
}

gci *.png | % { losslesswebp($_); }