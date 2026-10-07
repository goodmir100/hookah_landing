from PIL import Image
from pathlib import Path

MEDIA = Path("public/media")

jobs = [
    ("shisha-hero.png", "hero-photo.jpg", 1920),
    ("shisha-hero.png", "hero-photo.webp", 1920),
    ("shisha-hero-poster.png", "hero-video-poster.jpg", 1920),
    ("shisha-hero-poster.png", "hero-video-poster.webp", 1920),
    ("product-hookah.png", "product-hookah.webp", 900),
    ("product-flavours.png", "product-flavours.webp", 900),
    ("product-coals.png", "product-coals.webp", 900),
]

for src_name, dst_name, max_w in jobs:
    src = MEDIA / src_name
    if not src.exists():
        print(f"skip (missing): {src}")
        continue
    im = Image.open(src).convert("RGB")
    im.thumbnail((max_w, max_w), Image.LANCZOS)
    dst = MEDIA / dst_name
    if dst.suffix == ".webp":
        im.save(dst, "WEBP", quality=82, method=6)
    else:
        im.save(dst, "JPEG", quality=84, optimize=True, progressive=True)
    print(f"{dst_name}: {im.size[0]}x{im.size[1]} {dst.stat().st_size // 1024} KB")
