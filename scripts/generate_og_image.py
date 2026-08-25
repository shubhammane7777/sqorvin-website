"""
Generates public/og-image.png — a branded Open Graph card for sqorvin.
No stock photography or AI imagery; just the brand palette, a faint data
grid, and the wordmark, matching the site's dark theme.

Run with: python3 scripts/generate_og_image.py
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import math
import os

W, H = 1200, 630
BG = (5, 7, 13)
LINE = (29, 37, 64)
INK = (244, 246, 251)
INK_SOFT = (154, 164, 196)
BLUE = (76, 127, 255)
VIOLET = (139, 92, 246)
CYAN = (34, 211, 238)

FONT_DIR = "/mnt/skills/examples/canvas-design/canvas-fonts"
HEADING_FONT = os.path.join(FONT_DIR, "BricolageGrotesque-Bold.ttf")
MONO_FONT = os.path.join(FONT_DIR, "JetBrainsMono-Regular.ttf")

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img, "RGBA")

# --- faint grid ---
gap = 48
for x in range(0, W, gap):
    draw.line([(x, 0), (x, H)], fill=(*LINE, 90), width=1)
for y in range(0, H, gap):
    draw.line([(0, y), (W, y)], fill=(*LINE, 90), width=1)

# --- soft glow blobs (blue top-left, violet bottom-right) ---
glow_layer = Image.new("RGBA", (W, H), (0, 0, 0, 0))
glow_draw = ImageDraw.Draw(glow_layer)
glow_draw.ellipse([-200, -220, 560, 420], fill=(*BLUE, 70))
glow_draw.ellipse([760, 260, 1400, 760], fill=(*VIOLET, 55))
glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(110))
img.paste(glow_layer, (0, 0), glow_layer)
draw = ImageDraw.Draw(img, "RGBA")

# --- a few connecting "data nodes" echoing the hero background ---
import random
random.seed(7)
pts = [(random.randint(700, 1150), random.randint(80, 550)) for _ in range(14)]
for i, p1 in enumerate(pts):
    for p2 in pts[i + 1:]:
        d = math.dist(p1, p2)
        if d < 170:
            alpha = int((1 - d / 170) * 90)
            draw.line([p1, p2], fill=(*BLUE, alpha), width=1)
for p in pts:
    draw.ellipse([p[0] - 2.5, p[1] - 2.5, p[0] + 2.5, p[1] + 2.5], fill=(*VIOLET, 200))

# --- logo mark (rounded square, gradient, ascending nodes) ---
mark_size = 84
mark_x, mark_y = 96, 130
mark_img = Image.new("RGBA", (mark_size, mark_size), (0, 0, 0, 0))
mark_draw = ImageDraw.Draw(mark_img)
for i in range(mark_size):
    t = i / mark_size
    r = int(BLUE[0] + (VIOLET[0] - BLUE[0]) * t)
    g = int(BLUE[1] + (VIOLET[1] - BLUE[1]) * t)
    b = int(BLUE[2] + (VIOLET[2] - BLUE[2]) * t)
    mark_draw.line([(0, i), (mark_size, i)], fill=(r, g, b, 255))
mask = Image.new("L", (mark_size, mark_size), 0)
ImageDraw.Draw(mask).rounded_rectangle([0, 0, mark_size, mark_size], radius=20, fill=255)
mark_img.putalpha(mask)
node_pts = [(18, 54), (34, 38), (46, 48), (66, 26)]
mark_draw.line(node_pts, fill=(255, 255, 255, 255), width=5, joint="curve")
for p in node_pts[1:]:
    mark_draw.ellipse([p[0] - 4, p[1] - 4, p[0] + 4, p[1] + 4], fill=(255, 255, 255, 255))
img.paste(mark_img, (mark_x, mark_y), mark_img)

# --- wordmark + tagline ---
heading_font = ImageFont.truetype(HEADING_FONT, 72)
tagline_font = ImageFont.truetype(HEADING_FONT, 34)
mono_font = ImageFont.truetype(MONO_FONT, 22)

text_x = mark_x
text_y = mark_y + mark_size + 34
draw.text((text_x, text_y), "sqorvin", font=heading_font, fill=INK)
draw.text((text_x, text_y + 92), "Clear data. Confident decisions.", font=tagline_font, fill=INK_SOFT)

draw.text(
    (text_x, text_y + 150),
    "DATA ANALYTICS · POWER BI · AI · BUSINESS INTELLIGENCE — LONDON, UK",
    font=mono_font,
    fill=(*CYAN, 230),
)

os.makedirs("public", exist_ok=True)
img.save("public/og-image.png")
print("Saved public/og-image.png", img.size)
