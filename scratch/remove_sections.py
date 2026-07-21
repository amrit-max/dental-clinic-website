with open('d:\\dental clinic\\src\\components\\Services.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Ensure we're targeting the correct blocks.
# line 295 is index 294: {/* 4. SUPPORTING IMAGE SECTION
# We'll just search for the indices to be safe.
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if "4. SUPPORTING IMAGE SECTION" in line:
        start_idx = i
    if "6. CTA BANNER" in line:
        end_idx = i

if start_idx != -1 and end_idx != -1:
    del lines[start_idx:end_idx]
    with open('d:\\dental clinic\\src\\components\\Services.tsx', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f"Deleted from index {start_idx} to {end_idx}.")
else:
    print(f"Not found. Start: {start_idx}, End: {end_idx}")
