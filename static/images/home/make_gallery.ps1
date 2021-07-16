Get-ChildItem gallery-*.png | ForEach-Object -Parallel {
    # jpeg/webp
    magick $_ -quality 85 $([IO.Path]::ChangeExtension($_, "jpg"))
    magick $_ -quality 85 $([IO.Path]::ChangeExtension($_, "webp"))
}
