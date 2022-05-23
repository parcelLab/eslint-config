import parcellab from '@parcellab/danger-plugin';

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async function dangerReport() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  await parcellab({
    branchSize: {
      maxCommits: 20,
      maxFiles: 20,
    },
  });
})();
