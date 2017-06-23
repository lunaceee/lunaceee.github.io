#! /usr/bin/env python

import os
import sys
import glob
import shutil

def cmd(s):
    print 'Executing %s' % s
    os.system(s)

curdir = os.path.realpath('.')
print curdir

destdir = os.path.realpath('../../lunaceee.github.io/landmark')
print destdir

if not curdir.endswith('Demo'):
    raise Exception('You must be in the Demo director to run this script')


htmls = glob.glob('./*.html')

images = glob.glob('./css/images/*.*')

csses = glob.glob('./css/*.css')

jses = glob.glob('./js/*.js')

def cp(src,dest):
    print 'cp %s %s' % (src, dest)
    shutil.copy(src, dest)

for h in htmls:
    dest = os.path.join(destdir, os.path.basename(h))
    cp(h, dest)

for c in csses:
    dest = os.path.join(destdir, 'css', os.path.basename(c))
    cp(c, dest)

for j in images:
    dest = os.path.join(destdir, 'css', 'images', os.path.basename(j))
    cp(j, dest)

for j in jses:
    dest = os.path.join(destdir, 'js', os.path.basename(j))
    cp(j, dest)

cmd('cp -a materialize %s/materialize' % destdir)
cmd('cp -a scrollmagic %s/scrollmagic' % destdir)

os.chdir(destdir)
cmd('git add *.html js/*js css/*css css/images/*.*' )
cmd('git add materialize/')
cmd('git add scrollmagic/')
cmd('git commit -m "auto-publish commit by publish.py script"' )
cmd('git push origin master')
