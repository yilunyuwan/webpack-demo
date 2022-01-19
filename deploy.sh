yarn build &&
git checkout gh-pages &&
rm -rf *.html *.js *.json *.css *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'updated' &&
git push -u origin ph-pages &&
git checkout -